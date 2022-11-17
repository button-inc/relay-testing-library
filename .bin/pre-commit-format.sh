#!/usr/bin/env bash

set -euxo pipefail

pushd packages/relay-testing-library || exit 1
files=("$@")
files=("${files[@]/#/../../}")

# --ignore-unknown prevents prettier from complaining about file types it doesn't know about
yarn run prettier --ignore-unknown --write "${files[@]}"
