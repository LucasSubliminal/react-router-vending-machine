// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Snack1 from "./Snack1";
import Snack2 from "./Snack2";
import Snack3 from "./Snack3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/snack1" element={<Snack1 />} />
        <Route path="/snack2" element={<Snack2 />} />
        <Route path="/snack3" element={<Snack3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
