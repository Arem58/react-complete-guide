import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "../../styles/Expenses/Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  /*OJO!!!!! Esta se podria decir que es la version mas legible de las 3 para renderizar condicionalmente
    Se puede guardar contenido JSX en variables, no estamos obligados a usar JSX solo sn el return
  let expensesContent = <p>No expenses found.</p>;

    React tiene la capacidad de renderizar un array si lo convertimos con una funcion como map a un objeto NGX como ExpenseItem
    Siempre que se trabaje con map hay que agregar key unicos para facilitar las cosas a react a la hora de renderizar y evitar bugs

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  } */

  return (
    <div>
      <Card className="expenses">
        {/* Two-way binding para que el valor por defecto del año sea 2020 y no 2022 */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* Necesitamos pasar ya filtrado los expenses */}
        <ExpensesChart expenses={filteredExpenses} />
        
        {/* Haciendo referencia a la variable se puede renderizar como se hace normalmente */}
        {/* expensesContent */}
        <ExpensesList items={filteredExpenses} />

        {/* Se puede agregar condicionales de esta manera por si no se cumple una condicion que se renderize la que se llegue a cumplir, es mas legible que la pasada 
            pero sigue siendo mucha logiaca aplicada en JSX
        filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          )) */}
        {/* Esta es una forma similar de condicional pero mas parecido a un if comun pero es menos legible 
        filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        ) */}
      </Card>
    </div>
  );
};

export default Expenses;
