#!/usr/bin/env node

const { spawnSync } = require('child_process');

const { resolveBin } = require('@jpapini/tools-utils');

const bin = resolveBin('lint-staged', 'lint-staged');
const config = require.resolve('@jpapini/lint-staged-config');

const result = spawnSync(bin, ['--config', config], { stdio: 'inherit' });

if (result.error) {
    console.error(result.error.message);
    process.exit(1);
}

if (result.status === null) process.exit(1);
process.exit(result.status);
