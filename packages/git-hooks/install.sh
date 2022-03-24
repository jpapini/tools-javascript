#!/bin/sh

if [ "$CI" = "true" ] || [ "$NODE_ENV" = "production" ]; then
    echo "CI or production environment, skipping Husky installation"
    exit 0
fi

HUSKY_BIN="$(./resolve.js husky/lib/bin.js)"
HOOKS_DIR="$(cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P)/hooks"

if [ ! -z "$INIT_CWD" ]; then
    cd $INIT_CWD;
fi

"$HUSKY_BIN" install "$HOOKS_DIR"
