import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";
import CoinList from "../../components/CoinList/CoinList";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <Hero setSearchTerm={setSearchTerm} />
      <CoinList searchTerm={searchTerm} />
    </main>
  );
}
