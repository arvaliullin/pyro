import { useState, useEffect } from "react";
import "./App.css";
import "./wasm_exec.js";
import { multiply } from "./math/multiply.js";

function App() {
  const [result, setResult] = useState(0.0);

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
    let value = globalThis.multiply(10, 12, 5);
    setResult(value);
  };

  return (
    <>
      <h1>Научно-исследовательская работа</h1>
      <div className="card">
        <button onClick={recalculate}>Multiply result: {result}</button>
      </div>
    </>
  );
}

export default App;
