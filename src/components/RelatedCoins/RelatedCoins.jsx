import React, { useState, useEffect } from "react";

const RelatedCoins = ({ exclude }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );

        const data = await response.json();
        const filteredData = data.filter((coin) => coin.id !== exclude);
        const randomCoins = [];
        console.log(data);

        for (let i = 0; i < 4; i++) {
          const randomIndex = Math.floor(Math.random() * filteredData.length);
          randomCoins.push(filteredData[randomIndex]);
          filteredData.splice(randomIndex, 1);
        }

        setCoins(randomCoins);
      } catch (error) {
        console.error("error fetching", error);
      }
    };
    fetchCoins();
  }, [exclude]);

  return (
    <div>
      {coins.map((coin) => (
        <div className="flex items-center">
        <img className="w-8" src={coin.image} alt='coin icon'></img>
        <p>{coin.name}</p>
        <p>{coin.current_price}</p>
        <p>{coin.price_change_24h}</p>
        </div>
            
      ))}
    </div>
  );
};

export default RelatedCoins;
