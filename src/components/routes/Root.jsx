import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";

import "../../wasm_exec.js";

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
            <li>
              <Link to={`experiment/fibonacciRecursive`}>
                Рекурсивная функция Фибоначи
              </Link>
            </li>
            <li>
              <Link to={`experiment/fibonacciIterative`}>
                Итеративная функция Фибоначи
              </Link>
            </li>
            <li>
              <Link to={`experiment/multiply`}>
                Функция перемножение целых чисел
              </Link>
            </li>
            <li>
              <Link to={`experiment/multiplyVector`}>
                Функция перемножение векторов
              </Link>
            </li>
            <li>
              <Link to={`experiment/factorize`}>
                Функция факторизации числа
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
