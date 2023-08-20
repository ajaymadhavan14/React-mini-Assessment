import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from "./pages/RegistrationForm";
import Home from "./pages/Home";
import AllData from "./pages/AllData";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/registrationform" Component={RegistrationForm} />
        <Route path="/success" Component={Confirmation} />
        <Route path="/alldata" Component={AllData} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
