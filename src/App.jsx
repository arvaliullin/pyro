import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './wasm_exec.js'

function App() {
  const [count, setCount] = useState(0)


    useEffect(() => {
        async function load() {
            const go = new window.Go();
            const result = await WebAssembly.instantiateStreaming(
                fetch('lib_go.out.wasm'), go.importObject);
            await go.run(result.instance);
        }

        load().then(() => {console.log("Go wasm module success")});
    }, []);

    return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
