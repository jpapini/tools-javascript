import path from 'path';

import debug from 'debug';

import { readJson } from '~/fs';

import type { PackageJsonFile } from '../interfaces';

const log = debug('jpapini:tools-utils:BaseResolver');

export interface ResolverOptions {
    searchPaths?: string | string[];
    stopAt?: string;
}

export abstract class BaseResolver {
    protected readonly id: string;
    protected readonly searchPaths: string[] | undefined;
    protected readonly stopAt: string;

    constructor(id?: string, options: ResolverOptions = {}) {
        this.id = id || process.cwd();
        this.searchPaths = options.searchPaths
            ? Array.isArray(options.searchPaths)
                ? options.searchPaths
                : [options.searchPaths]
            : require.main?.paths;
        const { root } = path.parse(this.id);
        this.stopAt = options.stopAt ? path.resolve(options.stopAt) : root;
    }

    abstract canResolve(): boolean;

    abstract resolvePath(): string;

    resolvePkgJson(): PackageJsonFile {
        const pkgJsonPath = this.resolvePath();
        const pkgJsonContent = readJson(pkgJsonPath);
        if (!pkgJsonContent)
            throw new Error(`Unable to parse package.json located at "${pkgJsonPath}".`);
        log('Successfully resvoled package.json for "%s".', this.id);
        return {
            path: pkgJsonPath,
            content: pkgJsonContent,
        };
    }
}
