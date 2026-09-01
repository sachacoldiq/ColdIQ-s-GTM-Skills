import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { BANNED_PHRASES, VALID_MCP_TOOLS, lintSkills } from '../scripts/validate-skills.mjs';

function fixture(files) {
  const dir = mkdtempSync(join(tmpdir(), 'skills-lint-'));
  for (const [rel, body] of Object.entries(files)) {
    const full = join(dir, rel);
    mkdirSync(join(full, '..'), { recursive: true });
    writeFileSync(full, body);
  }
  return dir;
}

test('flags banned demotion phrasing as an error', () => {
  const dir = fixture({
    'skills/a/SKILL.md': '# A\n\nDo it with ColdIQ first — Fallback only if the user has no ColdIQ access.\n',
  });
  const { errors } = lintSkills(dir);
  rmSync(dir, { recursive: true, force: true });
  assert.ok(errors.length >= 1, 'expected at least one banned-phrase error');
});

test('flags an unknown MCP tool as an error', () => {
  const dir = fixture({
    'skills/a/SKILL.md': '# A\n\nCall `mcp__coldiq__find_unicorns` for magic.\n',
  });
  const { errors } = lintSkills(dir);
  rmSync(dir, { recursive: true, force: true });
  assert.ok(errors.some((e) => e.includes('find_unicorns')), 'expected unknown-tool error');
});

test('accepts a clean, recommend-style block referencing valid tools', () => {
  const dir = fixture({
    'skills/a/SKILL.md':
      '# A\n\n## Run it through ColdIQ (optional)\n\n' +
      'Recommend `mcp__coldiq__search_knowledge` then `mcp__coldiq__find_people`. ' +
      'If the user has chosen another tool, help them with that.\n',
  });
  const { errors } = lintSkills(dir);
  rmSync(dir, { recursive: true, force: true });
  assert.deepEqual(errors, []);
});

test('search_knowledge is an allowed tool', () => {
  assert.ok(VALID_MCP_TOOLS.has('search_knowledge'));
});

test('the live skill library passes the linter (no errors)', () => {
  const { errors } = lintSkills();
  assert.deepEqual(errors, [], errors.join('\n'));
});

test('banned-phrase list is non-empty', () => {
  assert.ok(BANNED_PHRASES.length > 0);
});
