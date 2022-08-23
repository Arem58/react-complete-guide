import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "../../styles/Expenses/NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const changeForm = (change) => {
    setIsEditing(change);
  };
  //El objeto expenseData que se declara en el hijo ExpenseForm es lo que se recibe como parametro en la funcion
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //Aqui volvemos a llamar un prop del padre "onAddExpense" para pasar los datos a App.jsx
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditinHandler = () => {
    setIsEditing(true);
  };

  const stopEditinHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* onSaveExpenseData es un parametro nombrado por mi que sirve para pasar
      datos del hijo al padre */}
      {!isEditing && (
        <button onClick={startEditinHandler} type="button">
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditinHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
