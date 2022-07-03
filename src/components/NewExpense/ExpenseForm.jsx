import React, { useState } from "react";

import "../../styles/Expenses/EXpenseForm.css";

const EXpenseForm = (props) => {
  // Esta forma es para actualizar un estado a la vez
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /* Esta forma es para actualizar muchos estados al mismo tiempo
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */

  //event.target.value siempre va a dar el valor en strings no importa si lo que se esta ingresando sea un numero o una fecha
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    /* La forma correcta en este metodo es la segunda forma y siempre debe ser asi si la actualizacion del estado dependa de la anterior,
    si se hace de la primera forma podria depender de un estado desactualizado, esto sucede solo cuando se actualizan muchos estados al mismo 
    tiempo. De la segunda forma React garantiza que siempre sera el estado mas actualizado
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
    Si el actualizar los estados depende de un estado anterior siempre usar esta funcion
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    }); */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submintHandler = (event) => {
    /* Submit event lo que hace es que la pagina se recargue por el browser ya que envia una solicitud al server que lo hostea para evitar eso
    se utiliza event.preventDefault() que es javascript vanilla */
    event.preventDefault();

    //Se parsea el string de la variable en un date object
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    /* Cuando un botor esta dentro de un form y este es es type submit, el elemento form emite un evento que se puede escuchar 
    ese es el submit event */
    <form onSubmit={submintHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            /* Cambiar el estado y modificar el valor del input con el estado se llama two-way binding y es 
            muy util cuando se trabaja con forms */
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default EXpenseForm;
