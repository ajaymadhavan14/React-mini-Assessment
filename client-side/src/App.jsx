import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from "@pages/RegistrationForm";
import Home from "@pages/Home";
import AllData from "@pages/AllData";
import Confirmation from "@pages/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrationform" element={<RegistrationForm />} />
        <Route path="/success" element={<Confirmation />} />
        <Route path="/alldata" element={<AllData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
