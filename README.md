# Plain Language Skills

Writing skills that make reports readable by people with zero project
background. Available in English and Chinese (说人话), and packaged for
Claude Code, Codex, Cursor, and Gemini CLI.

## What problem it solves

"Humanizer" skills make AI text *sound* less AI-written: they strip
overused words, break formulaic sentence patterns, vary rhythm. They do not
touch a different, worse problem: a sentence like "E4 channel starved, so
we abstained" contains no AI tells at all, passes every humanizer
untouched, and no outsider can read it.

This skill targets that problem. It treats one standard as the yardstick
for all writing: **a smart reader with zero background understands it in
one pass.**

## What's inside

Each SKILL.md contains:

- **10 rules** covering words, sentences, structure, and evidence.
- **A two-pass check** to catch unfamiliar terms and hidden shorthand.

The skills give direct instructions without worked examples.

## Install with npm

Run this from any directory:

```bash
npx @ara-commons/plain-language-skill
```

The installer detects supported agents on your machine and installs both
skills. If it cannot find one, it installs them for Codex by default. It never
overwrites an existing skill unless you add `--force`.

Choose the agent or language when needed:

```bash
# Install only the Chinese skill for Codex
npx @ara-commons/plain-language-skill --target codex --language zh

# Preview every destination without changing files
npx @ara-commons/plain-language-skill --target all --dry-run
```

Supported targets are `claude`, `codex`, `cursor`, `gemini`, and `all`.
For a global command instead of `npx`:

```bash
npm install --global @ara-commons/plain-language-skill
plain-language-skill --target codex
```

This is a standalone package in the `@ara-commons` organization. Its name and
release process are separate from `@ara-commons/ara-skills`.

## Manual install

English:

```bash
mkdir -p ~/.claude/skills/plain-language
curl -sL https://raw.githubusercontent.com/ARA-Labs/plain-language-skill/main/skills/plain-language/SKILL.md \
  -o ~/.claude/skills/plain-language/SKILL.md
```

Chinese (说人话):

```bash
mkdir -p ~/.claude/skills/plain-language-zh
curl -sL https://raw.githubusercontent.com/ARA-Labs/plain-language-skill/main/skills/plain-language-zh/SKILL.md \
  -o ~/.claude/skills/plain-language-zh/SKILL.md
```

Then invoke with `/plain-language` (or `/plain-language-zh`), or just ask
for a report — the skill triggers on report-writing requests.

## License

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — use it
anywhere, keep the attribution.
