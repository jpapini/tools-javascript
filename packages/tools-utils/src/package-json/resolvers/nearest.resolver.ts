import path from 'path';

import debug from 'debug';
import memoize from 'memoizee';

import { readJson } from '~/fs';

import { BaseResolver } from './base.resolver';

const log = debug('jpapini:tools-utils:NearestResolver');

function _findNearestPkgJson(dir: string, stopAt: string): string | undefined {
    let currentPath = dir;
    while (currentPath !== stopAt) {
        const pkgJsonPath = path.join(currentPath, 'package.json');
        log('Trying to read package.json file: %s', pkgJsonPath);
        const pkgJsonContent = readJson(pkgJsonPath);
        if (pkgJsonContent) {
            log('Found package.json file: %s', pkgJsonPath);
            return pkgJsonPath;
        }
        currentPath = path.dirname(currentPath);
    }
    return undefined;
}
const findNearestPkgJson = memoize(_findNearestPkgJson, { primitive: true });

export class NearestResolver extends BaseResolver {
    canResolve(): boolean {
        try {
            if (!this.id.startsWith('/') && !this.id.startsWith('.')) return false;
            return path.basename(this.id) !== 'package.json';
        } catch {
            return false;
        }
    }

    resolvePath(): string {
        const pkgJsonPath = findNearestPkgJson(this.id, this.stopAt);
        if (!pkgJsonPath) throw new Error(`Could not find nearest package.json for "${this.id}".`);
        return pkgJsonPath;
    }
}
