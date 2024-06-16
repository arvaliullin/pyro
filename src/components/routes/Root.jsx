import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";
import "../../performance/performance.js"
import "../../wasm_exec.js";
import performanceExperiments from "../../performance/performance.js";

export default function Root() {
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

  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            {Object.entries(performanceExperiments).map(([funcKey, funcData]) => (
                <li key={funcKey}>
                  <Link to={`/experiment/${funcKey}`}>
                    {funcData.experimentName}
                  </Link>
                </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet/>
      </div>
    </>
  );
}
