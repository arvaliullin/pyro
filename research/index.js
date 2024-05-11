import "../out/wasm_exec.js"

if(!WebAssembly.instantiateStreaming) {
    WebAssembly.instantiateStreaming = async (resp, importObject) => {
        const source = await (await resp).arrayBuffer();
        return await WebAssembly.instantiate(source, importObject);
    };
}

const go = new Go();
let mod, inst;

WebAssembly.instantiateStreaming(fetch("../out/lib_go.out.wasm"),
go.importObject).then((result) => {
    mod = result.module;
    inst = result.instance;
    document.getElementById("runButton").disabled = false;
}).catch((err) => {
    console.log(err);
});

export async function run() {
    console.clear();
    await go.run(inst);
    inst = await WebAssembly.instantiate(mod, go.importObject);
}
export function runCalc(){
    let t0 = performance.now();
    let value = globalThis.x2Integrate(0.0, 100.0, 10000);
    let t1 = performance.now();
    console.log(`Performance go:\t ${(t1 - t0).toFixed(4)} milliseconds`)
    console.log(`Value go:\t ${value}`);
}

window.run = run
window.runCalc = runCalc
