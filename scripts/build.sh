#!/usr/bin/env bash

cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" $PWD/src

# Build Go WebAssembly
export GOARCH=wasm
export GOOS=js
go build -o $PWD/public/lib_go.out.wasm $PWD/pkg/lib.go

bun install
bun run build
