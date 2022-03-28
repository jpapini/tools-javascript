import type { PackageJson } from './package-json.interface';

export interface PackageJsonFile {
    path: string;
    content: PackageJson;
}
