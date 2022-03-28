#!/usr/bin/env node

const husky = require('husky');
const path = require('path');

if (process.env.CI !== undefined || process.env.NODE_ENV === 'production') {
    console.log('CI or production environment, skipping Husky installation.');
    process.exit(0);
}

if (process.env.INIT_CWD !== undefined) {
    process.chdir(process.env.INIT_CWD);
}

husky.install(path.resolve(__dirname, '../hooks'));
