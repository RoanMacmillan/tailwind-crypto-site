import React, { useState, useEffect } from "react";

const CoinConverter = ({ coin }) => {
    const [coinAmount, setCoinAmount] = useState(''); // State to hold the coin amount entered by the user.
    const [usdAmount, setUsdAmount] = useState('');

    const handleCoinAmountChange = (e) => {
        const coinVal = e.target.value;
        setCoinAmount(coinVal);
        if (coinVal && coin.market_data && coin.market_data.current_price && coin.market_data.current_price.usd) {
          setUsdAmount((coinVal * coin.market_data.current_price.usd).toFixed(2));
        } else {
          setUsdAmount('');
        }
      };
    
      const handleUSDAmountChange = (e) => {
        const usdVal = e.target.value;
        setUsdAmount(usdVal);
        if (usdVal && coin.market_data && coin.market_data.current_price && coin.market_data.current_price.usd) {
          setCoinAmount((usdVal / coin.market_data.current_price.usd).toFixed(8));
        } else {
          setCoinAmount('');
        }
      };

  return <div className="mt-10 flex flex-col rounded-md bg-gray-100 px-4 pb-4 pt-4">
  <h2 className="mb-4 text-lg font-bold">Convert {coin.name}</h2>
  <div className="flex">
    <label className="flex h-12 w-16 items-center justify-center border-r bg-white text-sm font-semibold">
      {coin.symbol.toUpperCase()}
    </label>
    <input
      className="w-full pl-3"
      type="number"
      value={coinAmount}
      onChange={handleCoinAmountChange}
      min="0"
      step="any"
    />
  </div>
  <div className="mt-4 flex">
    <label className="flex h-12 w-16 items-center justify-center border-r bg-white text-sm font-semibold">
      USD
    </label>
    <input
       className="w-full pl-3"
       type="number"
       value={usdAmount}
       onChange={handleUSDAmountChange}
       min="0"
       step="any"
    />
  </div>
  <p className="mt-4 text-sm font-semibold text-gray-600">
    1 {coin.symbol.toUpperCase()} = $
    {coin.market_data.current_price.usd.toLocaleString()}
  </p>
</div>;
};

export default CoinConverter;
