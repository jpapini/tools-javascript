import debug from 'debug';

import { readJson, readJsonSync } from '../fs';

import type { PkgJson } from './pkg-json.interface';
import type { PkgJsonFile } from './pkg-json-file.interface';

const log = debug('jpapini:tools-utils:pkg-json-resolver');

export function resolvePkgJsonPath(packageName: string, fromPaths?: string | string[]): string {
    try {
        log('Resolving package.json path of %s package from %O', packageName, fromPaths);
        const pkgJsonPath = require.resolve(`${packageName}/package.json`, {
            paths:
                fromPaths !== undefined
                    ? Array.isArray(fromPaths)
                        ? fromPaths
                        : [fromPaths]
                    : undefined,
        });
        log('Resolved package.json path of %s package: %s', packageName, pkgJsonPath);
        return pkgJsonPath;
    } catch {
        log(`Unable to resolve package.json of %s package`, packageName);
        throw new Error(`Unable to resolve the package.json of the "${packageName}" package.`);
    }
}

export async function resolvePkgJsonFile(
    packageName: string,
    fromPaths?: string | string[],
): Promise<PkgJsonFile> {
    const pkgJsonPath = resolvePkgJsonPath(packageName, fromPaths);
    const pkgJsonContent = await readJson<PkgJson>(pkgJsonPath);
    return { path: pkgJsonPath, content: pkgJsonContent };
}

export function resolvePkgJsonFileSync(
    packageName: string,
    fromPaths?: string | string[],
): PkgJsonFile {
    const pkgJsonPath = resolvePkgJsonPath(packageName, fromPaths);
    const pkgJsonContent = readJsonSync<PkgJson>(pkgJsonPath);
    return { path: pkgJsonPath, content: pkgJsonContent };
}