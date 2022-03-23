#!/bin/sh

if [ "$CI" = "true" ] || [ "$NODE_ENV" = "production" ]; then
    echo "CI or production environment, skipping Husky installation"
    exit 0
fi

SCRIPT_PATH="$(cd -- "$(dirname "$0")" >/dev/null 2>&1; pwd -P)"

if [ ! -z "$INIT_CWD" ]; then
    cd $INIT_CWD;
fi

$SCRIPT_PATH/node_modules/.bin/husky install $SCRIPT_PATH/hooks/
