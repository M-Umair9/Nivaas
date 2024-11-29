import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/home";
import Signin from "./pages/Signin";
import ListProperty from "./pages/ListProperty";
import Payment from "./pages/Payment";
import Screening from "./pages/Screening";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/ListProperty" element={<ListProperty />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Screening" element={<Screening />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
