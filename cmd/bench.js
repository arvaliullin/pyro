#!/usr/bin/env bun

let cwd = process.cwd()
const fs = require('fs')
require(`${cwd}/out/wasm_exec.js`)
let filename = `${cwd}/out/lib_go.out.wasm`;
const source = fs.readFileSync(filename);

var typedArray = new Uint8Array(source)

async function runWasm() {
    const go = new globalThis.Go()
    const result = await WebAssembly.instantiate(typedArray, go.importObject);
    go.run(result.instance);

    let t0 = performance.now();
    let value = globalThis.x2Integrate(0.0, 100.0, 10000);
    let t1 = performance.now();
    console.log(`Perfomance go:\t ${(t1 - t0).toFixed(4)} milliseconds`)
    console.log(`Value go:\t ${value}`);
}

runWasm();
