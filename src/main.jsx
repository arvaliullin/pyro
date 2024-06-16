import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'


import Root  from "./components/routes/Root.jsx";
import ErrorPage from "./components/errorPage/ErrorPage.jsx";
import Experiment from "./components/pages/Experiment.jsx";
import performanceExperiments from "./performance/performance.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "experiment/:experimentId",
                element: <Experiment performanceExperiments={performanceExperiments} />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
