import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "../../styles/Expenses/ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    /* NO se renderiza con un div y se paso a lista por cuestiones semanticas, no cambia nada. Ver ExpensesList.jsx para ver la razon */
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
