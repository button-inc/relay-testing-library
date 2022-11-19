#!/usr/bin/env bash

set -euxo pipefail

pushd packages/relay-testing-library || exit 1
yarn lint
