'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');

const { install, parseArgs } = require('../bin/plain-language-skill.cjs');

function temporaryHome() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'plain-language-skill-'));
}

test('installs both skills into an explicitly selected target', () => {
  const home = temporaryHome();
  try {
    const output = [];
    install(parseArgs(['--target', 'codex']), { home, output: message => output.push(message) });

    assert.equal(fs.existsSync(path.join(home, '.codex', 'skills', 'plain-language', 'SKILL.md')), true);
    assert.equal(fs.existsSync(path.join(home, '.codex', 'skills', 'plain-language-zh', 'SKILL.md')), true);
    assert.equal(output.length, 2);
  } finally {
    fs.rmSync(home, { recursive: true, force: true });
  }
});

test('does not overwrite an installed skill unless --force is supplied', () => {
  const home = temporaryHome();
  const destination = path.join(home, '.claude', 'skills', 'plain-language', 'SKILL.md');
  try {
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, 'custom version');

    const result = install(parseArgs(['--target', 'claude', '--language', 'en']), { home, output: () => {} });
    assert.equal(result[0].status, 'skipped');
    assert.equal(fs.readFileSync(destination, 'utf8'), 'custom version');
  } finally {
    fs.rmSync(home, { recursive: true, force: true });
  }
});

test('dry runs without creating files', () => {
  const home = temporaryHome();
  try {
    const result = install(parseArgs(['--target', 'gemini', '--language', 'zh', '--dry-run']), {
      home,
      output: () => {}
    });
    assert.equal(result[0].status, 'planned');
    assert.equal(fs.existsSync(path.join(home, '.gemini')), false);
  } finally {
    fs.rmSync(home, { recursive: true, force: true });
  }
});
