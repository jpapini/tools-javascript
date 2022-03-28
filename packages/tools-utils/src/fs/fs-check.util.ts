import { accessSync, constants, existsSync, lstatSync } from 'fs';

import type { PathLike } from 'fs';

export function isDirExists(path: PathLike): boolean {
    try {
        if (!existsSync(path)) return false;
        const stats = lstatSync(path);
        return stats.isDirectory();
    } catch {
        return false;
    }
}

export function isFileExists(path: PathLike): boolean {
    try {
        if (!existsSync(path)) return false;
        const stats = lstatSync(path);
        return stats.isFile();
    } catch {
        return false;
    }
}

export function isFileExecutable(path: PathLike): boolean {
    try {
        accessSync(path, constants.X_OK);
        const stats = lstatSync(path);
        return stats.isFile();
    } catch {
        return false;
    }
}
