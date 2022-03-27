import { readFileSync } from 'fs';
import { readFile } from 'fs/promises';

import type { PathLike } from 'fs';

export async function readJson<T = Record<string, unknown>>(filePath: PathLike): Promise<T> {
    let jsonRaw: string;
    try {
        jsonRaw = await readFile(filePath, { encoding: 'utf-8' });
    } catch {
        throw new Error(`Unable to read the JSON file "${filePath}".`);
    }

    try {
        return JSON.parse(jsonRaw);
    } catch {
        throw new Error(`Unable to parse the JSON file "${filePath}".`);
    }
}

export function readJsonSync<T = Record<string, unknown>>(filePath: PathLike): T {
    let jsonRaw: string;
    try {
        jsonRaw = readFileSync(filePath, { encoding: 'utf-8' });
    } catch {
        throw new Error(`Unable to read the JSON file "${filePath}".`);
    }

    try {
        return JSON.parse(jsonRaw);
    } catch {
        throw new Error(`Unable to parse the JSON file "${filePath}".`);
    }
}
