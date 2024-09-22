// VendingMachine.js
import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div>
      <h1>Welcome to the Vending Machine!</h1>
      <h2>Select a snack:</h2>
      <ul>
        <li><Link to="/snack1">Chips</Link></li>
        <li><Link to="/snack2">Soda</Link></li>
        <li><Link to="/snack3">Chocolate</Link></li>
      </ul>
    </div>
  );
}

export default VendingMachine;
