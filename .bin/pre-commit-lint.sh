#!/usr/bin/env bash

set -euxo pipefail

pushd packages/relay-testing-library || exit 1
files=("$@")
files=("${files[@]/#/}")

yarn run eslint "${files[@]}"
