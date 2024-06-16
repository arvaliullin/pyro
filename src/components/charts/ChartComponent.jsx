import PropTypes from "prop-types";
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryLegend,
    VictoryGroup,
} from "victory";

const ChartComponent = ({tableData}) => {
    return (
        <VictoryChart domainPadding={70} height={300} width={600}>
            <VictoryLegend
                x={90}
                y={20}
                orientation="horizontal"
                gutter={20}
                style={{border: {stroke: "black"}, title: {fontSize: 5}}}
                colorScale={["#EBC535", "#66D0DD"]}
                data={[{name: "JavaScript"}, {name: "WebAssembly"}]}
            />
            <VictoryAxis dependentAxis tickFormat={(x) => `${x / 1000} ms`} offsetX={70}/>
            <VictoryGroup offset={40}>
                <VictoryBar
                    data={tableData.map((item, index) => ({index: index + 70, ...item}))}
                    x="index"
                    y="JavaScript"
                    style={{data: {fill: "#EBC535"}}}
                />
                <VictoryBar
                    data={tableData.map((item, index) => ({index: index + 70, ...item}))}
                    x="index"
                    y="WebAssembly"
                    style={{data: {fill: "#66D0DD"}}}
                />
            </VictoryGroup>
        </VictoryChart>
    );
};
ChartComponent.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChartComponent;
