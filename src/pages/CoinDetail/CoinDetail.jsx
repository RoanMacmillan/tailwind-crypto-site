import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Search from "../../assets/images/icons/search.svg";
import RelatedCoins from "../../components/RelatedCoins/RelatedCoins";
import CoinConverter from "../../components/CoinConverter/CoinConverter";
import CoinDetailHero from "../../components/CoinDetailHero/CoinDetailHero";
import Description from "../../components/Description/Description";

const CoinDetail = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);



  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        const data = await response.json();
        setCoin(data);
        console.log(data);
      } catch (error) {
        console.error("error fetching data from cgecko", error);
      }
    };

    fetchCoinData();
  }, [id]);

  if (!coin) return "Loading...";

  

  return (
    <div className="mt-6">
      

    <CoinDetailHero coin={coin}/>

      <CoinConverter coin={coin} />

      <Description coin={coin} />

      
      {/* Display other data about the coin... */}
    </div>
  );
};

export default CoinDetail;
