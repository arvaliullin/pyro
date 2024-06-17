import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import PerformanceTable from "../table/PerfomanceTable.jsx";
import ChartComponent from "../charts/ChartComponent.jsx";

function Experiment({ performanceExperiments }) {
  const { experimentId } = useParams();
  const [tableData, setTableData] = useState([]);
  const [stateMessage, setStateMessage] = useState("Начать эксперимент");

  const runPerformanceExperiment = async (experimentId) => {
    const experiment = performanceExperiments[experimentId];
    return experiment.calculatePerformance();
  };

  async function handleRecalculate() {
    setStateMessage("Идет эксперимент");
    runPerformanceExperiment(experimentId)
      .then((performanceValues) => {
        setTableData(performanceValues);
        setStateMessage("Начать эксперимент");
      })
      .catch(() => {
        setStateMessage("Ошибка");
      });
  }

  function exportToCSV() {
    const csvContent =
      "N, JavaScript, WebAssembly, Acceleration\n" +
      tableData
        .map(
          (data) =>
            `${data.N},${data.JavaScript},${data.WebAssembly},${
              data.JavaScript / data.WebAssembly
            }`
        )
        .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${experimentId}_data.csv`;
    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <>
      <h1>Эксперимент {experimentId}</h1>
      <button onClick={handleRecalculate}>{stateMessage}</button>
      <span style={{ margin: "0 10px" }}></span>
      <button onClick={exportToCSV}>Сохранить в CSV</button>
      <div className="card">
        <PerformanceTable key="performanceTable" tableData={tableData} />
        <ChartComponent key="chartComponent" tableData={tableData} />
      </div>
    </>
  );
}

Experiment.propTypes = {
  performanceExperiments: PropTypes.object.isRequired,
};

export default Experiment;
