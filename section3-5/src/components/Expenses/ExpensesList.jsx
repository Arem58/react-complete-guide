import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./../../styles/Expenses/ExpensesList.css";

const ExpensesList = (props) => {
  
  //Si el contenido cambia completamente basado en condicionales se recomienda usar esta forma para renderizado condicional
  //Si lo que cambia es parcial se recomienda la otra forma
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {
        (props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )))
      }
    </ul>
  );
};

export default ExpensesList;
