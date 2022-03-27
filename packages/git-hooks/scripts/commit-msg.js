#!/usr/bin/env node

const path = require('path');
const { spawnSync } = require('child_process');

const { packageBinarySync } = require('@jpapini/tools-utils');

const bin = packageBinarySync('@commitlint/cli', 'commitlint', path.resolve(__dirname));
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
