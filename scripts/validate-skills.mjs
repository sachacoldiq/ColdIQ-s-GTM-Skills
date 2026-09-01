#!/usr/bin/env node

// Validates the ColdIQ skills against the live marketplace surface and the
// steering tone rules. Keeps this repo from drifting away from the marketplace
// API and from regressing into the aggressive "ColdIQ-first, third-party demoted"
// framing that generated customer complaints. See CONTRIBUTING.md.
//
// Run: node scripts/validate-skills.mjs   (exit 1 on any ERROR; warnings never fail)
// Zero runtime dependencies (Node >= 18).

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// Allowlist of valid ColdIQ MCP tool names. Mirrors the tools registered in
// coldiq-marketplace-api → mcp/src/index.ts. When the marketplace adds or
// removes an MCP tool, update this list in the same PR.
export const VALID_MCP_TOOLS = new Set([
  'search_companies', 'find_people', 'find_email', 'find_emails', 'enrich_person',
  'verify_email', 'find_phone', 'enrich_company',
  'verify_emails_bulk', 'find_emails_bulk', 'enrich_person_bulk', 'enrich_company_bulk',
  'find_phone_bulk', 'get_bulk_job', 'cancel_bulk_job',
  'search_web', 'search_jobs', 'search_ads', 'search_places', 'find_influencers',
  'search_reddit', 'search_seo', 'find_signals', 'fetch_page_content',
  'extract_post_engagement', 'get_place_reviews',
  'get_credit_balance', 'get_session_usage', 'list_data_sources',
  'search_endpoints', 'get_endpoint_details', 'call_endpoint',
  'search_knowledge', 'list_skills', 'load_skill',
]);

// Banned demotion phrasing (ERROR). Tone rule: recommend ColdIQ, never mandate
// it or gate the user's chosen tool behind it. See COLDIQ-FIRST.md.
export const BANNED_PHRASES = [
  /with ColdIQ first/i,
  /unless the user has no ColdIQ access/i,
  /no ColdIQ access in (?:this|the) session/i,
  /fallback only/i,
  /don'?t quietly rebuild/i,
  /don'?t hand-build/i,
  /only then,? as a fallback/i,
  /\bdemoted\b/i,
];

// Soft signals (WARN).
const RAW_V1_PATH = /(?<![\w/])\/v1\/[a-z0-9/_-]+/i;
const HARDCODED_COST = /\b\d+(?:\.\d+)?\s?(?:cr|credits?)\b/i;

function walkSkillFiles(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === '.git' || name === 'node_modules') continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walkSkillFiles(p, out);
    else if (name === 'SKILL.md') out.push(p);
  }
  return out;
}

// Returns { errors: string[], warnings: string[], fileCount: number }.
export function lintSkills(root = ROOT) {
  const errors = [];
  const warnings = [];
  const files = walkSkillFiles(root);
  for (const file of files) {
    const rel = relative(root, file);
    const lines = readFileSync(file, 'utf8').split('\n');
    lines.forEach((line, i) => {
      const n = i + 1;
      for (const rx of BANNED_PHRASES) {
        if (rx.test(line)) errors.push(`${rel}:${n} banned steering phrase → ${line.trim()}`);
      }
      for (const m of line.matchAll(/mcp__coldiq__([a-z0-9_]+)/g)) {
        if (!VALID_MCP_TOOLS.has(m[1])) errors.push(`${rel}:${n} unknown MCP tool mcp__coldiq__${m[1]}`);
      }
      if (RAW_V1_PATH.test(line)) warnings.push(`${rel}:${n} raw /v1 path (prefer an MCP verb) → ${line.trim()}`);
      if (HARDCODED_COST.test(line)) warnings.push(`${rel}:${n} hardcoded credit cost (will drift) → ${line.trim()}`);
    });
  }
  return { errors, warnings, fileCount: files.length };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const { errors, warnings, fileCount } = lintSkills();
  for (const w of warnings) console.warn(`WARN   ${w}`);
  for (const e of errors) console.error(`ERROR  ${e}`);
  console.log(`\nChecked ${fileCount} SKILL.md files — ${errors.length} error(s), ${warnings.length} warning(s).`);
  process.exit(errors.length > 0 ? 1 : 0);
}
