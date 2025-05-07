import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QR from "./QR";
import Connect from "./Connect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QR />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </Router>
  );
}

export default App;
