import React from "react";
import Hamburger from "../../assets/images/icons/hamburger.svg";
import logo from "../../assets/images/icons/logo.svg";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex justify-between items-center h-16 lg:h-28">
      <Link to='/'>

      <div className="flex items-center">

        <img className="filter-teal" src={logo} alt="Logo"></img>
        <span className="hidden font-custom font-semibold uppercase text-xs tracking-[3px] md:block">
          topcoin
        </span>
      </div>
      </Link>

      <nav className="hidden md:flex gap-10 font-semibold text-sm ">
        <a className="cursor-pointer hover:text-gray-500">Crypto</a>
        <a className="cursor-pointer hover:text-gray-500">Learn</a>
        <a className="cursor-pointer hover:text-gray-500">About</a>
        <a className="cursor-pointer hover:text-gray-500">Products</a>
      </nav>

      <div className="hidden md:flex gap-10 font-semibold text-sm">
        <button>Sign in</button>
        <button className="bg-custom-teal text-white px-4 pt-2 pb-2 rounded-md hover:bg-[#41BE9C]">
          Sign up
        </button>
      </div>

      <img className="md:hidden" src={Hamburger} alt="Hamburger Icon"></img>
    </header>
  );
};

export default Header;
