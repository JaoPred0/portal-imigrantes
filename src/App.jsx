import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/pt/Navbar";
import Pt from "./pages/Pt";
import En from "./pages/En";
import Es from "./pages/Es";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pt />} />
        <Route path="/es" element={<En />} />
        <Route path="/en" element={<Es />} />
      </Routes>
    </Router>
  );
};

export default App;
