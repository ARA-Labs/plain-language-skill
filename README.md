# plain-language

A Claude Code skill that makes your reports readable by people with zero
project background. Available in English and Chinese (说人话).

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

Each SKILL.md has three parts:

- **Four root causes of jargon** — the writing-time impulses that produce
  it (forgetting the reader doesn't know; letting working shorthand leak
  into the text; coining a term to compress a sentence; trying to sound
  professional) — so you can catch it at the source instead of playing
  whack-a-mole with word blacklists.
- **19 rules** in four groups: words, sentences, structure, numbers and
  evidence. Each rule is one or two lines with a before/after example.
- **A six-question self-check** to run before shipping, plus the
  two-sweep habit: obvious codenames fall in the first pass; half-jargon
  only shows up in the second.

The rules are distilled from pre-LLM classics — Orwell's "Politics and the
English Language" (1946), Feynman's appendix to the Challenger report
(1986), the U.S. Federal Plain Language Guidelines (2011), and Cloudflare's
2019 outage postmortem — plus lessons from rewriting real jargon-heavy
evaluation reports. The distillation is complete: day-to-day writing needs
none of the sources open.

## Install

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
