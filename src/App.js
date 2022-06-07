import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Recipes from "./pages/Recipes";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/searched/:search" element={<Recipes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
