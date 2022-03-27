import { isFileExecutable, isFileExecutableSync } from '../fs';
import { isNonEmptyString } from '../types';

import { resolvePkgJsonBinaries } from './pkg-json-binaries.util';
import { resolvePkgJsonFile, resolvePkgJsonFileSync } from './pkg-json-resolver.util';

export async function packageBinaries(
    packageName: string,
    fromPaths?: string | string[],
): Promise<Record<string, string>> {
    const pkgJson = await resolvePkgJsonFile(packageName, fromPaths);
    const binaries = resolvePkgJsonBinaries(pkgJson);
    return binaries;
}

export function packageBinariesSync(
    packageName: string,
    fromPaths?: string | string[],
): Record<string, string> {
    const pkgJson = resolvePkgJsonFileSync(packageName, fromPaths);
    const binaries = resolvePkgJsonBinaries(pkgJson);
    return binaries;
}

export async function packageBinary(
    packageName: string,
    binaryName: string = packageName,
    fromPaths?: string | string[],
): Promise<string> {
    const pkgJson = await resolvePkgJsonFile(packageName, fromPaths);
    const binaries = resolvePkgJsonBinaries(pkgJson);
    if (!isNonEmptyString(binaries[binaryName])) {
        throw new Error(`"${pkgJson.path}" does not have a binary named "${binaryName}"`);
    }
    if (!(await isFileExecutable(binaries[binaryName]))) {
        throw new Error(
            `The binary "${binaries[binaryName]}" does not exist or is not executable.`,
        );
    }
    return binaries[binaryName];
}

export function packageBinarySync(
    packageName: string,
    binaryName: string = packageName,
    fromPaths?: string | string[],
): string {
    const pkgJson = resolvePkgJsonFileSync(packageName, fromPaths);
    const binaries = resolvePkgJsonBinaries(pkgJson);
    if (!isNonEmptyString(binaries[binaryName])) {
        throw new Error(`"${pkgJson.path}" does not have a binary named "${binaryName}"`);
    }
    if (!isFileExecutableSync(binaries[binaryName])) {
        throw new Error(
            `The binary "${binaries[binaryName]}" does not exist or is not executable.`,
        );
    }
    return binaries[binaryName];
}
