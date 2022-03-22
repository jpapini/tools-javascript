#!/bin/sh

if [ "$CI" = "true" ] || [ "$NODE_ENV" = "production" ]; then
    echo "CI or production environment, skipping Husky installation"
    exit 0
fi

./node_modules/.bin/husky install $(dirname "$0")/hooks/
