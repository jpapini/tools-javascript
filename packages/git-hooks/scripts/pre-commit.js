#!/usr/bin/env node

const path = require('path');
const { spawnSync } = require('child_process');

const bin = path.resolve(
    path.dirname(require.resolve('lint-staged/package.json')),
    'bin/lint-staged.js',
);
const config = require.resolve('@jpapini/lint-staged-config');

const result = spawnSync(bin, ['--config', config], { stdio: 'inherit' });

if (result.error) {
    console.error(result.error.message);
    process.exit(1);
}

if (result.status === 0) process.exit(0);
process.exit(1);
