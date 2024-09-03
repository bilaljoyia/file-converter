import React from "react";
import { FaHome, FaTag, FaSignInAlt, FaUser, FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className=" bg-[#fea928]/80 ">
      <div className="container mx-auto text-white p-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="BrandName Logo" className="h-10 mr-2" />
          <h1 className="text-2xl font-bold">BrandName</h1>
        </div>
        <nav>
          <ul className="flex text-[18px] space-x-6">
            <li>
              <Link
                to="/"
                className="flex items-center hover:text-blue-200 transition duration-300"
              >
                <FaHome className="mr-1" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="flex items-center hover:text-blue-200 transition duration-300"
              >
                <FaTag className="mr-1" /> Pricing
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4 text-[18px]">
          <Link
            to="/login"
            className="flex items-center hover:text-blue-200 transition duration-300"
          >
            <FaSignInAlt className="mr-1" /> Login
          </Link>

          <Link
            to="/signup"
            className="flex items-center hover:text-blue-200 transition duration-300"
          >
            <FaUser className="mr-1" /> Signup
          </Link>
          <span className="flex items-center">
            <FaCoins className="mr-1" /> Credits: 0
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
