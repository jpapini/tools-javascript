import { readFileSync } from 'fs';

import debug from 'debug';
import memoize from 'memoizee';

const log = debug('jpapini:tools-utils:readJson');

function _readJson<T = Record<string, unknown>>(jsonPath: string): T | undefined {
    try {
        log('Reading JSON file: %s', jsonPath);
        const jsonRaw = readFileSync(jsonPath, { encoding: 'utf-8' });
        return JSON.parse(jsonRaw);
    } catch (err) {
        log('Unable to parse JSON file "%s": %s', jsonPath, err);
        return undefined;
    }
}
export const readJson = memoize(_readJson, { primitive: true });
