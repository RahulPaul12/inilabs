import React from "react";
import logo from '../images/Frame(3).png'
const Navbar = () => {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center h-[90px] px-[30px] bg-transparent border-b-[1px] font-[16px]">
          <div className="flex justify-between items-center space-x-5">
            <img className="w-[91px]" src={logo} alt="" />
            <ul className="space-x-5 text-black flex items-center ">
              <a href="/">Home</a>
              <a href="/">Home</a>
              <a href="/">Home</a>
              <a href="/">Home</a>
            </ul>
          </div>
          <ul className="space-x-5 text-black flex items-center">
            <a href="/">EN</a>
            <a href="/">Contact Sales</a>
            <a href="/">Login</a>
            <a
              href="/"
              className="bg-[#4262FF]  flex justify-center items-center rounded-[24px] w-[150px] h-[50px] text-white px-[17px] py-[22px] "
            >
              Sign up free →
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
