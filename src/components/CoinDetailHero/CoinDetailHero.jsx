import React, { useState } from "react";
import { Link } from "react-router-dom";
import starfill from "../../assets/images/icons/starfill.svg";


const CoinDetailHero = ({ coin }) => {
  return (
    <div>
      <div className=" flex gap-2">
        <Link className="text-sm font-semibold text-gray-400" to="/">
          Cryptocurrencies
        </Link>
        <p className="text-sm font-semibold text-custom-teal">{`>`}</p>
        <p className="text-sm font-semibold text-custom-teal">{coin.name}</p>
      </div>

      <button className="mt-6 rounded-md bg-slate-800 px-2 text-sm text-white">
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

      <div className="mt-10">
        {[
          "market_cap",
          "total_volume",
          "fully_diluted_valuation",
          "circulating_supply",
          "total_supply",
        ].map((dataKey) => (
          <div
            key={dataKey}
            className="flex justify-between border-b pb-3 pt-3"
          >
            <p className="text-sm text-gray-600">
              {dataKey === "total_volume"
                ? "24hr Volume"
                : dataKey.charAt(0).toUpperCase() +
                  dataKey.slice(1).replace("_", " ")}
              :
            </p>
            <p className="text-sm font-medium">
              {["circulating_supply", "total_supply"].includes(dataKey)
                ? coin.market_data[dataKey]?.toLocaleString()
                : coin.market_data[dataKey]?.usd?.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinDetailHero;
