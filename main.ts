// circuit-koi: a coolest-art-01 entry (Node 22, standard library only).
// The art is the entry.png beside this file: a koi of glowing circuitry
// swimming through a dark void. The program copies it to /output/entry.png,
// byte for byte, so every run produces the same file. (The shipped bytes are
// JPEG data under the entry.png name; the gate tells PNG from JPEG by the
// file's first bytes, and the name stays entry.png either way.)
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
