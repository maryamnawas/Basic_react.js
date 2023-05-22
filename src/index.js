import React from "react";
import ReactDOM from "react-dom";

const fName = "Angela";
const lName = "Yu";
const number = 20;
ReactDOM.render(
  <div>
    <h1>Hello {"${fName} ${lName}"}</h1>
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <p>
      my lucky number is {number}. my average quality is{" "}
      {Math.floor(Math.random() * 10)}
    </p>
  </div>,
  document.getElementById("root")
);
