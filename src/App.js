import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Recipes from "./pages/Recipes";
import Nav from "./components/Nav";
import RecipePage from "./pages/RecipePage";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/searched/:search" element={<Recipes />} />
          <Route path="/recipe/:recipeID" element={<RecipePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
