// Snack1.js
import React from "react";
import { Link } from "react-router-dom";

function Snack1() {
  return (
    <div>
      <h2>Chips</h2>
      <p>You picked Chips. Enjoy!</p>
      <Link to="/">Go Back to Vending Machine</Link>
    </div>
  );
}

export default Snack1;
