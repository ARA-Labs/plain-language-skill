#!/usr/bin/env node

'use strict';

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const packageRoot = path.resolve(__dirname, '..');
const skills = {
  en: {
    directory: 'plain-language',
    source: 'skills/plain-language/SKILL.md',
    label: 'English'
  },
  zh: {
    directory: 'plain-language-zh',
    source: 'skills/plain-language-zh/SKILL.md',
    label: 'Chinese (说人话)'
  }
};

function homeDirectory() {
  return process.env.HOME || process.env.USERPROFILE || os.homedir();
}

function targetDirectories(home = homeDirectory()) {
  return {
    claude: path.join(home, '.claude', 'skills'),
    codex: path.join(home, '.codex', 'skills'),
    cursor: path.join(home, '.cursor', 'skills'),
    gemini: path.join(home, '.gemini', 'skills')
  };
}

function usage() {
  return `Usage: npx @ara-labs/plain-language-skill [options]

Install the English and Chinese plain-language skills for an AI coding agent.

Options:
  --target <name>       claude, codex, cursor, gemini, or all (default: detected target)
  --language <value>    en, zh, or both (default: both)
  --force               replace an existing installed skill
  --dry-run             show what would be installed without writing files
  -h, --help            show this help text

Examples:
  npx @ara-labs/plain-language-skill
  npx @ara-labs/plain-language-skill --target codex --language zh
  npx @ara-labs/plain-language-skill --target all --dry-run`;
}

function fail(message) {
  throw new Error(`${message}\n\n${usage()}`);
}

function parseArgs(argv) {
  const options = { force: false, dryRun: false, language: 'both', target: undefined };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--help' || argument === '-h') return { help: true };
    if (argument === '--force') {
      options.force = true;
      continue;
    }
    if (argument === '--dry-run') {
      options.dryRun = true;
      continue;
    }
    if (argument === '--target' || argument === '--language') {
      const value = argv[index + 1];
      if (!value || value.startsWith('-')) fail(`Missing value for ${argument}.`);
      options[argument.slice(2)] = value;
      index += 1;
      continue;
    }
    fail(`Unknown option: ${argument}`);
  }

  if (!['en', 'zh', 'both'].includes(options.language)) {
    fail(`Unsupported language: ${options.language}.`);
  }
  if (options.target && !['claude', 'codex', 'cursor', 'gemini', 'all'].includes(options.target)) {
    fail(`Unsupported target: ${options.target}.`);
  }
  return options;
}

function detectTargets(directories) {
  const detected = Object.entries(directories)
    .filter(([, directory]) => fs.existsSync(path.dirname(directory)))
    .map(([name]) => name);
  return detected.length > 0 ? detected : ['codex'];
}

function selectedTargets(target, directories) {
  if (target === 'all') return Object.keys(directories);
  return target ? [target] : detectTargets(directories);
}

function selectedLanguages(language) {
  return language === 'both' ? ['en', 'zh'] : [language];
}

function install(options, { home = homeDirectory(), output = console.log } = {}) {
  const directories = targetDirectories(home);
  const targets = selectedTargets(options.target, directories);
  const languages = selectedLanguages(options.language);
  const results = [];

  for (const target of targets) {
    for (const language of languages) {
      const skill = skills[language];
      const source = path.join(packageRoot, skill.source);
      const destination = path.join(directories[target], skill.directory, 'SKILL.md');
      const exists = fs.existsSync(destination);

      if (exists && !options.force) {
        results.push({ target, language, destination, status: 'skipped' });
        output(`Skipped ${skill.label} for ${target}: ${destination} already exists (use --force to replace it).`);
        continue;
      }

      if (!options.dryRun) {
        fs.mkdirSync(path.dirname(destination), { recursive: true });
        fs.copyFileSync(source, destination);
      }
      results.push({ target, language, destination, status: options.dryRun ? 'planned' : 'installed' });
      output(`${options.dryRun ? 'Would install' : 'Installed'} ${skill.label} for ${target}: ${destination}`);
    }
  }
  return results;
}

function main(argv = process.argv.slice(2)) {
  try {
    const options = parseArgs(argv);
    if (options.help) {
      console.log(usage());
      return 0;
    }
    install(options);
    return 0;
  } catch (error) {
    console.error(error.message);
    return 1;
  }
}

if (require.main === module) process.exitCode = main();

module.exports = {
  detectTargets,
  install,
  main,
  parseArgs,
  selectedLanguages,
  selectedTargets,
  targetDirectories
};
