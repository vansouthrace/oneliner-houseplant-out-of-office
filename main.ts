import { mkdirSync, writeFileSync } from "node:fs";

// Out-of-office auto-reply from a houseplant, for the
// "The Houseplant Out-of-Office" bounty on make.fun.
const entry =
  "Out of office: ignored since March. Water me, or forward this to someone who actually will.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
