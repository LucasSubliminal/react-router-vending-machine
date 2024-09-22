// Snack2.js
import React from "react";
import { Link } from "react-router-dom";

function Snack2() {
  return (
    <div>
      <h2>Soda</h2>
      <p>You picked Soda. Refreshing!</p>
      <Link to="/">Go Back to Vending Machine</Link>
    </div>
  );
}

export default Snack2;
