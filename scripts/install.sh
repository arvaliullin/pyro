#!/usr/bin/env bash

cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" $PWD/src

# Build Go WebAssembly
export GOARCH=wasm
export GOOS=js
go build -o $PWD/public/lib_go.out.wasm $PWD/pkg/lib.go

# Build project
bun install
bun run build

# Deploy project
rm -rf /opt/pyro
rm -rf $PWD/out

mkdir -p /opt/pyro
mkdir -p $PWD/out

export GOARCH=amd64
export GOOS=linux
go build -o $PWD/out/service pyro/cmd/service

cp -rf $PWD/dist $PWD/out
cp -f $PWD/out/service /opt/pyro
cp -rf $PWD/dist /opt/pyro/public
