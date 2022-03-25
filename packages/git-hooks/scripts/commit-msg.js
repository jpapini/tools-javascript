#!/usr/bin/env node

const path = require('path');
const { spawnSync } = require('child_process');

const bin = path.resolve(path.dirname(require.resolve('@commitlint/cli/package.json')), 'cli.js');
const config = require.resolve('@jpapini/commitlint-config');

const result = spawnSync(bin, ['--edit', process.argv[2], '--config', config], {
    stdio: 'inherit',
});

if (result.error) {
    console.error(result.error.message);
    process.exit(1);
}

if (result.status === 0) process.exit(0);
process.exit(1);
