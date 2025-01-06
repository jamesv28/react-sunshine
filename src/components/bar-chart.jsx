import PropTypes from "prop-types";
import { scaleLinear, max, scaleBand } from "d3";

const BarChart = ({ width, height, data }) => {
  const margin = 10;
  const lines = [10, 20, 30, 40];

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.sunshine)])
    .range([0, width - margin]);

  const yScale = scaleBand()
    .domain(data)
    .range([0, height - 2 * margin]);

  const rectangles = data.map((d) => (
    <rect
      key={d.city}
      x={margin}
      y={yScale(d)}
      height={yScale.bandwidth()}
      width={xScale(d.sunshine)}
      fill="#83008b"
      stroke="#ffffff"
    ></rect>
  ));

  const text = data.map((d) => (
    <text
      key={d.city}
      textAnchor="end"
      x={xScale(d.sunshine)}
      y={yScale(d) + 15}
      fill="#fff"
    >
      {d.city}
    </text>
  ));

  const gridLines = lines.map((l, i) => (
    <g key={i}>
      <line
        y1={0}
        y2={height - margin}
        x1={xScale(l)}
        x2={xScale(l)}
        stroke="#fff"
      ></line>
      <text textAnchor="middle" fontSize="12" x={xScale(l)} y={height - margin}>
        {l}
      </text>
    </g>
  ));
  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`}>
        {rectangles} {gridLines} {text}
      </svg>
    </div>
  );
};

BarChart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.array,
};

export default BarChart;
