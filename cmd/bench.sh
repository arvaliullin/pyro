#!/usr/bin/env bash

# Clean
rm -rf $PWD/out
mkdir -p $PWD/out

cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" $PWD/out

# Build Go WebAssembly
export GOARCH=wasm
export GOOS=js
go build -o $PWD/out/lib_go.out.wasm $PWD/src/lib.go

bun cmd/bench.js
