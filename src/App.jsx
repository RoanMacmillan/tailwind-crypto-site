import { useState, useEffect } from "react";
import "./globals.css";
import "./tailwind.css";
import Header from "./components/Header/Header";
import Home from './pages/Home/Home'

function App() {
  return (
    <div className=" max-w-7xl mx-auto px-6">
      <Header />
      <Home />
    </div>
  );
}

export default App;
