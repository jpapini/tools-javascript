#!/usr/bin/env node

try {
    if (process.argv.length < 3) process.exit(1);
    process.stdout.write(require.resolve(process.argv[2]) + '\n');
    process.exit(0);
} catch {
    process.exit(1);
}
