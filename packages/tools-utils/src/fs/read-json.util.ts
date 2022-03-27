import { readFileSync } from 'fs';
import { readFile } from 'fs/promises';

import debug from 'debug';
import type { PathLike } from 'fs';

const log = debug('jpapini:tools-utils:read-json');

export async function readJson<T = Record<string, unknown>>(filePath: PathLike): Promise<T> {
    let jsonRaw: string;
    try {
        log('Reading asynchronously JSON file: %s', filePath);
        jsonRaw = await readFile(filePath, { encoding: 'utf-8' });
    } catch {
        log('Unable to read asynchronously JSON file: %s', filePath);
        throw new Error(`Unable to read the JSON file "${filePath}".`);
    }

    try {
        log('Parsing asynchronously JSON file %s', filePath);
        return JSON.parse(jsonRaw);
    } catch {
        log('Unable to parse asynchronously JSON file: %s', filePath);
        throw new Error(`Unable to parse the JSON file "${filePath}".`);
    }
}

export function readJsonSync<T = Record<string, unknown>>(filePath: PathLike): T {
    let jsonRaw: string;
    try {
        log('Reading synchronously JSON file %s', filePath);
        jsonRaw = readFileSync(filePath, { encoding: 'utf-8' });
    } catch {
        log('Unable to read synchronously JSON file: %s', filePath);
        throw new Error(`Unable to read the JSON file "${filePath}".`);
    }

    try {
        log('Parsing synchronously JSON file %s', filePath);
        return JSON.parse(jsonRaw);
    } catch {
        log('Unable to parse synchronously JSON file: %s', filePath);
        throw new Error(`Unable to parse the JSON file "${filePath}".`);
    }
}
