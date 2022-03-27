import type { PkgJson } from './pkg-json.interface';

export interface PkgJsonFile {
    path: string;
    content: PkgJson;
}
