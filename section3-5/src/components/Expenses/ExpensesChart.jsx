import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { laber: "Jan", value: 0 },
    { laber: "Feb", value: 0 },
    { laber: "Mar", value: 0 },
    { laber: "Apr", value: 0 },
    { laber: "May", value: 0 },
    { laber: "Jun", value: 0 },
    { laber: "Jul", value: 0 },
    { laber: "Aug", value: 0 },
    { laber: "Sep", value: 0 },
    { laber: "Oct", value: 0 },
    { laber: "Nov", value: 0 },
    { laber: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoint={chartDataPoints} />;
};

export default ExpensesChart;
