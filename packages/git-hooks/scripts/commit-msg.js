#!/usr/bin/env node

const { spawnSync } = require('child_process');

const { resolveBin } = require('@jpapini/tools-utils');

const bin = resolveBin('commitlint', '@commitlint/cli');
const config = require.resolve('@jpapini/commitlint-config');

const result = spawnSync(bin, ['--edit', process.argv[2], '--config', config], {
    stdio: 'inherit',
});

if (result.error) {
    console.error(result.error.message);
    process.exit(1);
}

if (result.status === null) process.exit(1);
process.exit(result.status);
