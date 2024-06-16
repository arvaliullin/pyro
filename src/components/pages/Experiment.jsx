import { useParams } from 'react-router-dom';
import PerformanceTable from "../table/PerfomanceTable.jsx";
import ChartComponent from "../charts/ChartComponent.jsx";


function Experiment() {
    const tableData = [
        { N: 10, JavaScript: 50, WebAssembly: 20 },
        { N: 20, JavaScript: 40, WebAssembly: 15 },
        { N: 30, JavaScript: 35, WebAssembly: 10 },
        { N: 40, JavaScript: 30, WebAssembly: 10 },
        { N: 50, JavaScript: 25, WebAssembly: 5 }
    ];

    const { experimentId } = useParams();

    return (
        <>
            <h1> Экперимент {experimentId} </h1>
            <div className="card">
                <PerformanceTable tableData={tableData}/>
                <ChartComponent tableData={tableData} />
            </div>
        </>
    );
}
export default Experiment;
