#!/usr/bin/env node

const { spawnSync } = require('child_process');

const { packageBinarySync } = require('@jpapini/tools-utils');

const bin = packageBinarySync('lint-staged');
const config = require.resolve('@jpapini/lint-staged-config');

const result = spawnSync(bin, ['--config', config], { stdio: 'inherit' });

if (result.error) {
    console.error(result.error.message);
    process.exit(1);
}

if (result.status === null) process.exit(1);
process.exit(result.status);
