import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Search from "../../assets/images/icons/search.svg";
import starfill from "../../assets/images/icons/starfill.svg";

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
        {/* <div className=" flex justify-center relative ">
        <img
          className="w-5 absolute left-3 top-3 filter-brightness-invert"
          src={Search}
          alt="Search icon"
        ></img>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-md pl-10 px-4 py-2 w-full"
        //   value={inputValue}
        //   onChange={handleSearch}
        />
      </div> */}
      <div className=" flex gap-2">
        <Link className="font-semibold text-sm text-gray-400" to="/">Cryptocurrencies</Link>
        <p className="font-semibold text-sm text-custom-teal">{`>`}</p>
        <p className="font-semibold text-sm text-custom-teal">{coin.name}</p>
      </div>

      <button className="rounded-md bg-slate-800 px-2 text-sm text-white mt-6">
        Rank #{coin.market_cap_rank}
      </button>
      <div className=" mt-2 flex items-center gap-2">
        <img className="w-10" src={coin.image.small} alt="Crypto Logo"></img>
        <h1 className="text-lg font-bold">{coin.name}</h1>
        <p className="uppercase">{coin.symbol}</p>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <strong className="text-3xl">
          ${coin.market_data.current_price.usd.toLocaleString()}
        </strong>
        <p
          className={`${
            coin.market_data.price_change_percentage_24h_in_currency.usd > 0
              ? "text-green-500"
              : "text-red-500"
          } text-lg font-bold`}
        >
          {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
            2
          )}
          %
        </p>
      </div>
      <div className="mt-2 flex items-center gap-1">
        <p>{coin.market_data.current_price.btc} BTC</p>
        <p
          className={`${
            coin.market_data.price_change_percentage_24h_in_currency.btc > 0
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {coin.market_data.price_change_percentage_24h_in_currency.btc.toFixed(
            2
          )}
          %
        </p>
      </div>
      <button className="mt-2 flex items-center rounded-md bg-gray-100 px-1 text-sm font-semibold">
        <img
          className="filter-yellow w-4"
          src={starfill}
          alt="Favourite Icon"
        ></img>
        On {coin.watchlist_portfolio_users.toLocaleString()} Watchlists
      </button>
      {/* Display other data about the coin... */}
    </div>
  );
};

export default CoinDetail;
