import React from "react";

import "./../../styles/Chart/ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* Para hacer estilos dinamicos se utiliza la propiedad style */}
        <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
      </div>
      <div className="char-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
