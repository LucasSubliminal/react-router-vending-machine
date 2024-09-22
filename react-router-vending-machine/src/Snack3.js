// Snack3.js
import React from "react";
import { Link } from "react-router-dom";

function Snack3() {
  return (
    <div>
      <h2>Chocolate</h2>
      <p>You picked Chocolate. Sweet choice!</p>
      <Link to="/">Go Back to Vending Machine</Link>
    </div>
  );
}

export default Snack3;
