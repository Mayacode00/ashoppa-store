import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Men from "./components/men";
import Navbar from "./components/navbar";
import Women from "./components/women";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
