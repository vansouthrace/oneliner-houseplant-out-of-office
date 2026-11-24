import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "Out of office. The fern hasn't been watered since March and has unionised. Please direct all sunlight to the cactus.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
