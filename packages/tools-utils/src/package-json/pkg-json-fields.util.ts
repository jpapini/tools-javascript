import path from 'path';

import debug from 'debug';

import { isNonEmptyString, isObject } from '../types';

import type { PkgJsonFile } from './pkg-json-file.interface';

const log = debug('jpapini:tools-utils:pkg-json-fields');

export function resolvePkgJsonBinaries(pkgJson: PkgJsonFile): Record<string, string> {
    log('Resolving binary field of "%s"', pkgJson.path);
    if (!pkgJson.content.bin) {
        log('"%s" does not have a "bin" field.', pkgJson.path);
        throw new Error(`"${pkgJson.path}" does not have a "bin" field.`);
    }
    const pkgPath = path.dirname(pkgJson.path);
    if (isNonEmptyString(pkgJson.content.bin)) {
        const binaries = {
            [pkgJson.content.name]: path.resolve(pkgPath, pkgJson.content.bin),
        };
        log('Resolved binaries of "%s": %O', pkgJson.path, binaries);
        return binaries;
    }
    if (isObject(pkgJson.content.bin)) {
        const binaries = Object.fromEntries(
            Object.entries(pkgJson.content.bin).map(([key, value]) => [
                key,
                path.resolve(pkgPath, value),
            ]),
        );
        log('Resolved binaries of "%s": %O', pkgJson.path, binaries);
        return binaries;
    }
    log('"%s" has an invalid "bin" field: %O', pkgJson.path, pkgJson.content.bin);
    throw new Error(`"${pkgJson.path}" has an invalid "bin" field.`);
}
