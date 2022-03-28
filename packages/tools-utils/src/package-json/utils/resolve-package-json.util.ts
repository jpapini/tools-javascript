import debug from 'debug';

import type { PackageJsonFile } from '../interfaces';
import type { BaseResolver, ResolverOptions } from '../resolvers';
import { ModuleResolver, NearestResolver, PathResolver } from '../resolvers';

const log = debug('jpapini:tools-utils:resolvePkgJson');

function getResolver(id?: string, options?: ResolverOptions): BaseResolver {
    const pathResolver = new PathResolver(id, options);
    if (pathResolver.canResolve()) {
        log('Using PathResolver for "%s".', id);
        return pathResolver;
    }
    const nearestResolver = new NearestResolver(id, options);
    if (nearestResolver.canResolve()) {
        log('Using NearestResolver for "%s".', id);
        return nearestResolver;
    }
    const moduleResolver = new ModuleResolver(id, options);
    if (moduleResolver.canResolve()) {
        log('Using ModuleResolver for "%s".', id);
        return moduleResolver;
    }
    throw new Error(`Cannot resolve package.json for "${id}".`);
}

export function resolvePkgJsonPath(id?: string, options?: ResolverOptions): string {
    return getResolver(id, options).resolvePath();
}

export function resolvePkgJson(id?: string, options?: ResolverOptions): PackageJsonFile {
    return getResolver(id, options).resolvePkgJson();
}
