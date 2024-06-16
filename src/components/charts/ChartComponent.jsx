import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';
import PropTypes from 'prop-types';

const ChartComponent = ({ tableData }) => {
    return (
        <div>
            <VictoryChart
                domainPadding={{ x: 20 }}
                theme={VictoryTheme.material}
            >
                <VictoryAxis
                    tickValues={tableData.map(data => data.N)}
                    tickFormat={(t) => `${t}`}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(t) => `${t}`}
                />
                <VictoryStack colorScale={["green", "blue"]}>
                    <VictoryBar
                        data={tableData}
                        x="N"
                        y="JavaScript"
                        barWidth={20}
                    />
                    <VictoryBar
                        data={tableData}
                        x="N"
                        y="WebAssembly"
                        barWidth={20}
                    />
                </VictoryStack>
            </VictoryChart>
        </div>
    );
};

ChartComponent.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ChartComponent;