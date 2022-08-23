import React from "react";

import ChartBar from "./ChartBar";
import "./../../styles/Chart/Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoint.map((dataPoint) => dataPoint.value);

  // Spread operator para obtener todos los valores del array dataPointValues como valores individuales
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {/* Se va a aplicar lo aprendido, para renderizar dinamicamente las bar char */}
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
