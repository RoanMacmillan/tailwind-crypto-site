import React, { useState, useEffect } from "react";
import Search from "../../assets/images/icons/search.svg";

const Hero = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setSearchTerm(inputValue);
  }, [inputValue, setSearchTerm]);

  const handleSearch = (e) => {
    // e.preventDefault();
    setInputValue(e.target.value);
    // setSearchTerm(inputValue);
    console.log("Search input value: ", e.target.value);
  };

  return (
    <div className="mt-6 max-w-3xl mx-auto lg:mt-20">
      <h1 className="text-4xl font-semibold text-center lg:text-[4rem] lg:leading-[4rem] ">
        Track & Compare the hottest Cryptocurrencies
      </h1>
      <p className="text-center mt-4 custom-paragraph max-w-md mx-auto lg:mt-6">
        Coinmac provides a fundamental analysis of the crypto market. Explore
        varius statistics of your favourite coins here!
      </p>
      <div className="mt-4 flex justify-center relative max-w-xl mx-auto lg:mt-6 ">
        <img
          className="w-5 absolute left-3 top-3 filter-brightness-invert"
          src={Search}
          alt="Search icon"
        ></img>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-md pl-10 px-4 py-2 w-full"
          value={inputValue}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Hero;
