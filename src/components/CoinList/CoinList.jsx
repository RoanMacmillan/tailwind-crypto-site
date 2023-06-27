import { useState, useEffect } from "react";
import star from "../../assets/images/icons/star.svg";
import { Link } from "react-router-dom";

const CoinList = ({ searchTerm }) => {
  const [coins, setCoins] = useState([]);
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&price_change_percentage=1h,7d"
        );
        const data = await response.json();
        console.log(data);
        setCoins(data);
      } catch (error) {
        console.error("error fetching data from cgecko", error);
      }
    };

    fetchData();
  }, []);

  const handleSort = (field) => {
    setSortField(field);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  return (
    <div className="border-t border-l border-r rounded-lg mt-10 mb-10 bg-white overflow-x-auto lg:mt-20">
      <table className=" w-full">
        <thead>
          <tr className="text-left custom-th border-b">
            <th
              className="p-4 pl-11 cursor-pointer"
              onClick={() => handleSort("market_cap_rank")}
            >
              #
            </th>
            <th
              className="px-4 cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name
            </th>
            <th
              className="px-4 cursor-pointer"
              onClick={() => handleSort("current_price")}
            >
              Price
            </th>
            <th
              className="px-4 cursor-pointer"
              onClick={() =>
                handleSort("price_change_percentage_1h_in_currency")
              }
            >
              1h
            </th>
            <th
              className="px-4 cursor-pointer"
              onClick={() => handleSort("price_change_percentage_24h")}
            >
              24h
            </th>
            <th
              className="px-4 cursor-pointer"
              onClick={() =>
                handleSort("price_change_percentage_7d_in_currency")
              }
            >
              7d
            </th>
            <th
              className="px-4 cursor-pointer"
              onClick={() => handleSort("market_cap")}
            >
              Market Cap
            </th>

            {/* <th className=" px-4 pt-4 pb-4 ">Trade</th> */}
          </tr>
        </thead>
        <tbody>
          {coins
            .sort((a, b) => {
              return sortDirection === "asc"
                ? a[sortField] - b[sortField]
                : b[sortField] - a[sortField];
            })
            .filter(
              (coin) =>
                coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((coin) => (
              <tr
                key={coin.id}
                className="font-normal py-2 text-sm hover:bg-slate-50 border-b"
              >
                <td className="px-4 pl-11">
                  <div className="relative">
                    <img
                      className="w-5 absolute -left-8"
                      src={star}
                      alt="Favourite button"
                    ></img>
                    <span>{coin.market_cap_rank}</span>
                  </div>
                </td>

                <td className=" px-4 pr-10 py-4 flex items-center gap-1">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-6 h-6 mr-2"
                  />
                  <Link to={`/coins/${coin.id}`}>
                  <span className="font-bold">{coin.name}</span>
                  </Link>
                  <span className="uppercase text-gray-400 ml-1">
                    {coin.symbol}
                  </span>
                  <div className="px-4 text ml-auto hidden md:block">
                    <button className="bg-custom-light rounded-md px-2 py-1 text-xs font-bold text-custom-teal">
                      Buy
                    </button>
                  </div>
                </td>

                <td className="px-4">${coin.current_price.toLocaleString()}</td>

                <td
                  className={`px-4 ${
                    coin.price_change_percentage_1h_in_currency > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {coin.price_change_percentage_1h_in_currency.toFixed(2)}%
                </td>

                <td
                  className={`px-4 ${
                    coin.price_change_percentage_7d_in_currency > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {coin.price_change_percentage_7d_in_currency.toFixed(2)}%
                </td>

                <td
                  className={`px-4 ${
                    coin.price_change_percentage_24h > 0
                      ? "text-custom-teal"
                      : "text-red-500"
                  }`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="px-4">${coin.market_cap.toLocaleString()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinList;
