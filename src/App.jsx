import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./globals.css";
import "./tailwind.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import CoinDetail from "./pages/CoinDetail/CoinDetail";

function App() {
  return (
    <div className=" max-w-7xl mx-auto px-6">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/coins/:id' element={<CoinDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
