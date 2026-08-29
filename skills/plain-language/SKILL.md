---
name: plain-language
description: >-
  Plain-language writing standard. Load before writing anything meant for
  human readers (reports, summaries, design docs, emails, READMEs, UI copy).
  Write by these rules, then run the self-check.
  TRIGGERS: plain language, write a report, write a summary, write it up,
  nobody can read this
---

# Plain Language

The single standard for all writing: **a smart reader with zero background
understands it in one pass.** Use this yardstick whether or not the piece
will ever be published, because prose an outsider can read is easier for
every reader. You write to make things clear, not to sound professional.

## Where jargon comes from (diagnose first, then apply rules)

Jargon grows out of four bad impulses at the moment of writing. Check
yourself against them before you start:

1. **You forgot the reader doesn't know.** You have lived with this work so
   long you can no longer tell which words an outsider won't understand.
   Antidote: reread the draft through the eyes of someone on their first day.
2. **Working vocabulary leaks out.** The shorthand you coined while working
   (variable names, version numbers, internal metric names, batch codenames)
   is private speed-writing that readers have never seen. Antidote: before
   shipping, translate each one into the thing it refers to.
3. **The urge to compress.** Coining a new term to replace a sentence feels
   "efficient." A report is not code: readers would rather see the same plain
   sentence three times than memorize your new terminology.
4. **The urge to sound professional.** Big words, formal phrasing, and trade
   talk make text look like a "proper report." Writing that way protects the
   author's dignity while it costs the reader understanding.

## Rules

### Words

1. **Use short, everyday words.** "Use," not "utilize"; "help," not
   "facilitate"; "fix," not "remediate."
2. **Don't bury verbs inside nouns.** "Performed a repair" → "repaired it";
   "achieved a performance improvement" → "made it faster"; "made the
   decision to abandon" → "abandoned it."
3. **No naked codenames or acronyms.** Explain what it refers to in the same
   sentence where it first appears, or use the everyday name throughout.
   Never make readers carry a lookup table through your text.
4. **Don't invent words.** Giving a mechanism or phenomenon a nickname and
   then using it as a term is manufacturing new jargon. Say the thing it
   refers to, even if that takes longer.
5. **Cut words that carry no information.** Ask of every word: what does the
   sentence lose without it? If nothing, cut it.

### Sentences

6. **One sentence, one point.** Split long sentences. A sentence the reader
   can't finish in one breath is too long.
7. **Who did what.** Make the actor the subject and the action the verb.
   "An error was introduced" → "I broke it"; "the issue has been resolved" →
   "we fixed it."
8. **No double negatives.** "Not impossible" → "possible"; "not without
   risk" → "risky."
9. **Don't run rhetorical templates back to back.** "Not X, but Y,"
   balanced antitheses, tidy groups of three: once per piece is emphasis,
   five times is a verbal tic. A well-turned parallel is not the same as a
   clear statement. Unfold them back into ordinary sentences.
10. **Ration your dashes.** A dash often papers over a logical connection
    you haven't worked out. Most of them can become a period, or a word
    that names the relation: "because," "but," "in other words." More than
    one per paragraph is a warning sign.

### Structure

11. **Conclusion first.** The first sentence answers the question the reader
    most wants answered; detail and argument follow.
12. **Build the world before the detail.** The opening lines say: what this
    is about, who is involved, what was done, where the material comes from.
    The reader has no backstory. Your first paragraph is the backstory.
13. **Headings are the reader's questions.** "Who was fastest, and at what
    cost" beats "Results overview"; "Why these numbers can be trusted"
    beats "Methodology."
14. **One paragraph, one idea.** The first sentence states it; the paragraph
    stays on it.
15. **Parallel items go in lists and tables.** Three or more parallel items
    packed into one long sentence will not be remembered.

### Numbers and evidence

16. **Every number gets context.** Compared to what, good or bad, and what
    the gap means. "A 30% success rate" is indigestible; "retries succeeded
    30% of the time, against a usual 18%, so the persistence paid off" is a
    statement.
17. **State facts, not labels.** The concrete thing behind a codename or a
    bare score is what carries the information. "Metric A = 0.83" tells the
    reader nothing; "after a failure, it changed course 99% of the time"
    tells them what happened.
18. **Analogies explain; they never name.** Using everyday experience to
    help a reader grasp an unfamiliar idea is good. Coining a nickname and
    using it as a term is not (see rule 4).
19. **State limits and exceptions plainly.** Write "we only have four
    subjects, so these things happened together but we can't say which
    caused which," not "n=4, correlational." When you quote someone's vague
    claim, say in your own words what it actually means instead of passing
    the vagueness along.

## Self-check before shipping

Sweep the full text and ask of each sentence:

1. Would an outsider know this word? → Translate it or explain it in place.
2. Did I invent this word? → Delete it; say the thing it refers to.
3. Does this number have context? → Add it.
4. Is it clear who did what? → Rewrite in the active voice.
5. How many dashes, "not X but Y"s, and parallel triples in this paragraph?
   → More than one: unfold them into ordinary sentences.
6. Could I read this paragraph aloud to an uninvolved, intelligent person?
   → If not, rewrite it.

**Sweep twice.** The first pass catches obvious codenames. Half-jargon only
shows up on the second pass: trade shorthand standing in for a full
sentence, like "rollback-and-pivot" or "correlational, not causal."
Finally, read the whole piece aloud in your head: a sentence that sounds
awkward spoken is a sentence written badly.

---
Rules distilled from: Orwell, "Politics and the English Language" (1946);
Feynman, Appendix F to the Challenger report (1986); the U.S. Federal Plain
Language Guidelines (2011); Cloudflare's July 2019 outage postmortem.
Day-to-day writing needs none of them open.
