#!/usr/bin/env node

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SKILL_ROOTS = ['master-skills', 'skills'];
const TEXT_EXTENSIONS = new Set(['.csv', '.json', '.md', '.txt', '.yaml', '.yml']);

export const PROHIBITED_SKILL_NAMES = [
  ['Clay', /\bclay(?:gent|script)?\b/i],
  ['DeepLine', /\bdeep[\s-]?line\b/i],
  ['Orthogonal', /\borthogonal\b/i],
  ['Unify', /\bunify\b/i],
  ['Swan AI', /\bswan[\s-]*ai\b/i],
  ['Oxygen GTM', /\boxygen[\s-]*gtm\b/i],
];

export function findProhibitedNames(value) {
  return PROHIBITED_SKILL_NAMES
    .filter(([, pattern]) => pattern.test(value))
    .map(([name]) => name);
}

function walk(dir) {
  const files = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) files.push(...walk(path));
    else files.push(path);
  }
  return files;
}

export function findSkillViolations(root = ROOT) {
  const violations = [];
  for (const skillRoot of SKILL_ROOTS) {
    const base = join(root, skillRoot);
    for (const file of walk(base)) {
      const path = relative(root, file);
      for (const name of findProhibitedNames(path)) {
        violations.push(`${path}: prohibited competitor name '${name}' in path`);
      }
      if (!TEXT_EXTENSIONS.has(extname(file).toLowerCase())) continue;
      const text = readFileSync(file, 'utf8');
      for (const name of findProhibitedNames(text)) {
        violations.push(`${path}: prohibited competitor name '${name}' in content`);
      }
    }
  }
  return violations;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const violations = findSkillViolations();
  if (violations.length) {
    console.error(`Brand safety validation failed with ${violations.length} violation(s):`);
    for (const violation of violations) console.error(`- ${violation}`);
    process.exit(1);
  }
  console.log('Brand safety validation passed.');
}
