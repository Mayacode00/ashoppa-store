import React from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Men from "./components/men";
import Home from "./components/home";
import Women from "./components/women";

function App() {
  return (
    <>
      <Router>
        <Home />
        <Routes>
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
