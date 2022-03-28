import debug from 'debug';

import { BaseResolver } from './base.resolver';

const log = debug('jpapini:tools-utils:ModuleResolver');

export class ModuleResolver extends BaseResolver {
    canResolve(): boolean {
        return this.id.trim() !== '' && !this.id.startsWith('/') && !this.id.startsWith('.');
    }

    resolvePath(): string {
        try {
            const pkgJsonPath = require.resolve(`${this.id}/package.json`, {
                paths: this.searchPaths,
            });
            log('Resolved package.json path from module "%s" to "%s".', this.id, pkgJsonPath);
            return pkgJsonPath;
        } catch {
            throw new Error(`Unable to resolve package.json for module "${module}".`);
        }
    }
}
