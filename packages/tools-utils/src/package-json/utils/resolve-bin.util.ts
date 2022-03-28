import path from 'path';

import debug from 'debug';

import { isNonEmptyString, isObject } from '~/common';

import type { PackageJsonFile } from '../interfaces';
import type { ResolverOptions } from '../resolvers';

import { resolvePkgJson } from './resolve-package-json.util';

const log = debug('jpapini:tools-utils:resolveBin');

function resolveBinPaths(pkgJson: PackageJsonFile): Record<string, string> {
    log('Resolving binary paths of "%s".', pkgJson.path);
    if (!pkgJson.content.bin) throw new Error(`"${pkgJson.path}" does not have a "bin" field.`);
    const pkgPath = path.dirname(pkgJson.path);
    if (isNonEmptyString(pkgJson.content.bin)) {
        if (!isNonEmptyString(pkgJson.content.name))
            throw new Error(`"${pkgJson.path}" does not have a "name" field.`);
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
    throw new Error(`"${pkgJson.path}" has an invalid "bin" field.`);
}

export function resolveBinaries(id?: string, options?: ResolverOptions): Record<string, string> {
    const pkgJson = resolvePkgJson(id, options);
    return resolveBinPaths(pkgJson);
}

export function resolveBin(binName: string, id?: string, options?: ResolverOptions): string {
    const pkgJson = resolvePkgJson(id, options);
    const binaries = resolveBinPaths(pkgJson);
    if (!isNonEmptyString(binaries[binName]))
        throw new Error(`"${pkgJson.path}" does not have a binary named "${binName}".`);
    return binaries[binName];
}
