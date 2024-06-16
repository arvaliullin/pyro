import './PerformanceTable.css'

const PerformanceTable = ({ tableData }) => {
    return (
        <div className='performance-table'>
            <table>
                <thead>
                <tr>
                    <th>N</th>
                    <th>JavaScript</th>
                    <th>WebAssembly</th>
                    <th>Acceleration</th>
                </tr>
                </thead>
                <tbody>
                {tableData.map(data => (
                    <tr key={data.N}>
                        <td>{data.N}</td>
                        <td>{data.JavaScript}</td>
                        <td>{data.WebAssembly}</td>
                        <td>{(data.JavaScript / data.WebAssembly).toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PerformanceTable;