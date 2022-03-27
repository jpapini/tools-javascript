import { accessSync, constants, existsSync, lstatSync } from 'fs';
import { access, lstat } from 'fs/promises';

import type { PathLike } from 'fs';

export async function isDirExists(path: PathLike): Promise<boolean> {
    try {
        await access(path);
        const stats = await lstat(path);
        return stats.isDirectory();
    } catch {
        return false;
    }
}

export function isDirExistsSync(path: PathLike): boolean {
    try {
        if (!existsSync(path)) return false;
        const stats = lstatSync(path);
        return stats.isDirectory();
    } catch {
        return false;
    }
}

export async function isFileExists(path: PathLike): Promise<boolean> {
    try {
        await access(path);
        const stats = await lstat(path);
        return stats.isFile();
    } catch {
        return false;
    }
}

export function isFileExistsSync(path: PathLike): boolean {
    try {
        if (!existsSync(path)) return false;
        const stats = lstatSync(path);
        return stats.isFile();
    } catch {
        return false;
    }
}

export async function isFileExecutable(path: PathLike): Promise<boolean> {
    try {
        await access(path, constants.X_OK);
        const stats = await lstat(path);
        return stats.isFile();
    } catch {
        return false;
    }
}

export function isFileExecutableSync(path: PathLike): boolean {
    try {
        accessSync(path, constants.X_OK);
        const stats = lstatSync(path);
        return stats.isFile();
    } catch {
        return false;
    }
}
