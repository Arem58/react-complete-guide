import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "../../../styles/CourseInput.module.css";

// Ejemplo de estilos dinamicos con styled-components
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => props.invalid ? 'red' : 'black'};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//     background: ${props => props.invalid ? '#ffd7d7' : 'transparent'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* Dos formas para hacer un css dinamico con backticks o con las propiedades de styled-components, pasando una variable como props*/}
      {/* --------------------------------------------------------------------------------------
          CSS clases dinamicas  usando backticks que es nativo de javascript "template literal". 
          Lo interesante es que se puede injectar valores dinamicamente en el string*
          <div className={`form-control ${!isValid ? "invalid" : ""}`}> 
          --------------------------------------------------------------------------------------*/}
      {/* Strings son keys validas en javascript para objetos por eso se utiliza entre [] para identificar la clase */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input
          // Inline style es un metodo para hacer estilos dinamicos pero tiene una prioridad muy alta por lo que hace override a cualquier estilo que tenga css y se pierde
          // style={{
          //   borderColor: !isValid ? "red" : "black",
          //   backgroundColor: !isValid ? "salmon" : "transparent",
          // }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
