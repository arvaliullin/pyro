import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';

import PerformanceTable from "../table/PerfomanceTable.jsx";
import ChartComponent from "../charts/ChartComponent.jsx";

function Experiment({performanceExperiments}) {

    const {experimentId} = useParams();
    const [tableData, setTableData] = useState([]);
    const [stateMessage, setStateMessage] = useState("Начать эксперимент");

    const runPerformanceExperiment = async (experimentId) => {
        const experiment = performanceExperiments[experimentId];
        return experiment.calculatePerformance();
    };

    async function handleRecalculate() {
        setStateMessage("Идет эксперимент");
        runPerformanceExperiment(experimentId).then((performanceValues) => {
            setTableData(performanceValues);
            setStateMessage("Начать эксперимент");
        }).catch(() => {
            setStateMessage("Ошибка");
        });
    }

    return (<>
        <h1>Эксперимент {experimentId}</h1>
        <button onClick={handleRecalculate}> {stateMessage}</button>
        <div className="card">
            <PerformanceTable key="performanceTable" tableData={tableData}/>
            <ChartComponent key="chartComponent" tableData={tableData}/>
        </div>
    </>);
}

Experiment.propTypes = {
    performanceExperiments: PropTypes.object.isRequired,
};

export default Experiment;