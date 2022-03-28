import type { ResolverOptions } from '../resolvers';

import { resolvePkgJson } from './resolve-package-json.util';

export function hasDep(depName: string, id?: string, options?: ResolverOptions): boolean {
    const pkgJson = resolvePkgJson(id, options);
    return Object.keys(pkgJson.content.dependencies || {}).includes(depName);
}

export function hasDevDep(depName: string, id?: string, options?: ResolverOptions): boolean {
    const pkgJson = resolvePkgJson(id, options);
    return Object.keys(pkgJson.content.devDependencies || {}).includes(depName);
}

export function hasPeerDep(depName: string, id?: string, options?: ResolverOptions): boolean {
    const pkgJson = resolvePkgJson(id, options);
    return Object.keys(pkgJson.content.peerDependencies || {}).includes(depName);
}

export function hasOptionalDep(depName: string, id?: string, options?: ResolverOptions): boolean {
    const pkgJson = resolvePkgJson(id, options);
    return Object.keys(pkgJson.content.optionalDependencies || {}).includes(depName);
}

export function hasAnyDep(depName: string, id?: string, options?: ResolverOptions): boolean {
    const pkgJson = resolvePkgJson(id, options);
    return Object.keys({
        ...pkgJson.content.dependencies,
        ...pkgJson.content.devDependencies,
        ...pkgJson.content.peerDependencies,
    }).includes(depName);
}
