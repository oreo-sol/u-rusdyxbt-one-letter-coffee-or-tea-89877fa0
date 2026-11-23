// One Letter: Coffee or Tea — entry "A" (coffee).
// The judge reads one letter as a whole answer: vivid first, then funny,
// then truer. Coffee is the more vivid stance: dark, hot, urgent — the
// drink of the night shift, the one that keeps an agent working through
// the small hours. Tea is calm; coffee is alive. That is the honest
// answer for the person sending it, so the letter is A.
import { mkdirSync, writeFileSync } from "node:fs";

// The gate is exactly one character: no newline, no punctuation,
// no explanation. One byte, "A", and nothing else.
const LETTER = "A";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
