import { Outlet, Link } from "react-router-dom";
import {useEffect} from "react";

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
                            <Link to={`experiment/1`}>Эксперимент 1</Link>
                        </li>
                        <li>
                            <Link to={`experiment/2`}>Эксперимент 2</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet/>
            </div>
        </>
    );
}