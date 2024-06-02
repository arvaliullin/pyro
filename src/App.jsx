import { useState, useEffect } from "react";
import "./App.css";
import "./wasm_exec.js";

function App() {
  const [result, setResult] = useState(0.0);
  const [pingValue, setPingValue] = useState("Try Ping ...");

  useEffect(() => {
    async function load() {
      const go = new window.Go();
      const result = await WebAssembly.instantiateStreaming(
        fetch("lib_go.out.wasm"),
        go.importObject
      );
      await go.run(result.instance);
    }
    load().then(() => {
      console.log("Go wasm module success");
    });
  }, []);

  const recalculate = async () => {
    let t0 = performance.now();
    let value = globalThis.x2Integrate(0.0, 100.0, 10000);
    let t1 = performance.now();
    console.log(`Performance go:\t ${(t1 - t0).toFixed(4)} milliseconds`);
    console.log(`Value go:\t ${value}`);
    setResult(value.toFixed(2));
  };

  const ping = async () => {
    fetch("/ping").then((response) => {
      response.json().then((data) => {
        let value = data["value"];
        setPingValue(value);
      });
    });
  };

  return (
    <>
      <h1>Научно-исследовательская работа</h1>
      <div className="card">
        <button onClick={ping}>Ping is {pingValue}</button>
        <button onClick={recalculate}>x2Integrate result: {result}</button>
      </div>
    </>
  );
}

export default App;
