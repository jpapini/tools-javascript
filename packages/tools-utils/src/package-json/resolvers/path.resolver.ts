import path from 'path';

import { BaseResolver } from './base.resolver';

export class PathResolver extends BaseResolver {
    canResolve(): boolean {
        try {
            if (!this.id.startsWith('/') && !this.id.startsWith('.')) return false;
            return path.basename(this.id) === 'package.json';
        } catch {
            return false;
        }
    }

    resolvePath(): string {
        if (this.id.startsWith('.')) return path.resolve(this.id);
        return this.id;
    }
}
