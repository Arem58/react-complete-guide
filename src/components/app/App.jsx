import React from "react";

import Expenses from "../Elements/Expenses";
import "../../styles/app.css";

//https://stackoverflow.com/questions/55301315/when-i-pass-array-in-a-react-functional-component-it-turns-to-an-object

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {
        expenses.map((expenses, key) =>{
          return <Expenses key={key} {...expenses}/>
        })
      }
    </div>
  );
};

export default App;
