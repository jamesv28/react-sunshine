import PropTypes from "prop-types";

const BarChart = ({ width, height, data }) => {
  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`}></svg>
    </div>
  );
};

BarChart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.array,
};

export default BarChart;
