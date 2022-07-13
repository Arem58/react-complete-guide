import React from "react";

import "../../styles/UI/Card.css";

//Wrapper Componet https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595454#overview
const Card = (props) => {
  /* La variable classes habilita la funcion de poder usar las clases que se definen en la tag Card 
      mas la que se declara en este componente */
  const classes = "card " + props.className;

  /* Props children es una funcion reservada de React en Card hace referencia a todo lo que se encuentre en Card /Card
    que sirve para poderlo usar como un div normal (wrapper component)*/

  return <div className={classes}>{props.children}</div>;
};

export default Card;
