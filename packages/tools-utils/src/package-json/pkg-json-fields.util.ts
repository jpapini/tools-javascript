import path from 'path';

import { isNonEmptyString, isObject } from '../types';

import type { PkgJsonFile } from './pkg-json-file.interface';

export function resolvePkgJsonBinaries(pkgJson: PkgJsonFile): Record<string, string> {
    if (!pkgJson.content.bin) throw new Error(`"${pkgJson.path}" does not have a "bin" field.`);
    const pkgPath = path.dirname(pkgJson.path);
    if (isNonEmptyString(pkgJson.content.bin)) {
        return {
            [pkgJson.content.name]: path.resolve(pkgPath, pkgJson.content.bin),
        };
    }
    if (isObject(pkgJson.content.bin)) {
        return Object.fromEntries(
            Object.entries(pkgJson.content.bin).map(([key, value]) => [
                key,
                path.resolve(pkgPath, value),
            ]),
        );
    }
    throw new Error(`"${pkgJson.path}" has an invalid "bin" field.`);
}
