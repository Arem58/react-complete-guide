import React from "react";

import EXpenseForm from "./ExpenseForm";
import "../../styles/Expenses/NewExpense.css";

const NewExpense = (props) => {
  //El objeto expenseData que se declara en el hijo ExpenseForm es lo que se recibe como parametro en la funcion
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //Aqui volvemos a llamar un prop del padre "onAddExpense" para pasar los datos a App.jsx
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* onSaveExpenseData es un parametro nombrado por mi que sirve para pasar
      datos del hijo al padre */}
      <EXpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
