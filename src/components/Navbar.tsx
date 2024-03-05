import { useState } from "react";
import logo from "../images/Frame(3).png";

const Navbar = () => {
    const [showMenu, setMenu] = useState(false);
    function toggleMenu() {
        setMenu(!showMenu);
      }
    
    return (
        <div className="mx-auto flex w-full h-[90px] px-5 bg-transparent border-b-[1px] font-[16px] items-center justify-between">
      <section className="flex items-center gap-8">
      <img className=" w-fit lg:w-[91px]" src={logo} alt="" />

        <div className="hidden md:flex  my-8 items-center gap-6 font-normal text-[16px] text-black ">

             {/* Product menu button */}
              <a href="/">
                <div className="relative" data-twe-dropdown-ref>
                <button
    className="flex items-center rounded px-2 pb-2 pt-2.5 text-[16px] font-sm "
    type="button"
    id="dropdownMenuButton19"
    data-twe-dropdown-toggle-ref
    aria-expanded="false"
    data-twe-ripple-init
    data-twe-ripple-color="light">
    Product
    <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
                  </button>
                   <ul
    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
    aria-labelledby="dropdownMenuButton19"
    data-twe-dropdown-menu-ref>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-[16px] font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Action</a
      >
    </li>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Another action</a
      >
    </li>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Something else here</a
      >
    </li>
                   </ul>
                  </div>
              </a>
              {/* Solutions menu section */}
              <a href="/">
                <div className="relative" data-twe-dropdown-ref>
                <button
    className="flex items-center rounded px-2 pb-2 pt-2.5 text-[16px] font-sm "
    type="button"
    id="dropdownMenuButton19"
    data-twe-dropdown-toggle-ref
    aria-expanded="false"
    data-twe-ripple-init
    data-twe-ripple-color="light">
    Solutions
    <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
                  </button>
                   <ul
    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
    aria-labelledby="dropdownMenuButton19"
    data-twe-dropdown-menu-ref>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-[16px] font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Action</a
      >
    </li>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Another action</a
      >
    </li>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Something else here</a
      >
    </li>
                   </ul>
                  </div>
              </a>

              {/* Resources menu section */}

              <a href="/">
                <div className="relative" data-twe-dropdown-ref>
                <button
    className="flex items-center rounded px-2 pb-2 pt-2.5 text-[16px] font-sm "
    type="button"
    id="dropdownMenuButton19"
    data-twe-dropdown-toggle-ref
    aria-expanded="false"
    data-twe-ripple-init
    data-twe-ripple-color="light">
    Resources
    <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
                  </button>
                   <ul
    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
    aria-labelledby="dropdownMenuButton19"
    data-twe-dropdown-menu-ref>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-[16px] font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Action</a
      >
    </li>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Another action</a
      >
    </li>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Something else here</a
      >
    </li>
                   </ul>
                  </div>
              </a>
              <a href="/">Enterprise</a>
              <a href="/">Pricing</a>
        </div>
      </section>

      <section className=" hidden md:flex  gap-8 items-center">
      <a href="/"><span className="me-2">&#127760;</span>EN</a>
            <a href="/">Contact Sales</a>
            <a href="/">Login</a>
            <a
              href="/"
              className="bg-[#4262FF]  flex justify-center items-center rounded-[24px] w-fit lg:w-[150px] h-auto lg:h-[50px] text-white px-[17px] py-[22px] "
            >
              Sign up free →
            </a>
      </section>

      {showMenu && (
        <div className=" fixed w-[80%] mx-auto inset-x-0 top-24 lg:mx-8 flex flex-col items-center rounded-xl bg-slate-200 text-black md:hidden">
          <section className=" my-8 flex flex-col items-center gap-6 ">
            
             {/* Product menu button */}
              <a href="/">
                <div className="relative" data-twe-dropdown-ref>
                <button
    className="flex items-center rounded px-2 pb-2 pt-2.5 text-[16px] font-sm "
    type="button"
    id="dropdownMenuButton19"
    data-twe-dropdown-toggle-ref
    aria-expanded="false"
    data-twe-ripple-init
    data-twe-ripple-color="light">
    Product
    <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
                  </button>
                   <ul
    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
    aria-labelledby="dropdownMenuButton19"
    data-twe-dropdown-menu-ref>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-[16px] font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Action</a
      >
    </li>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Another action</a
      >
    </li>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Something else here</a
      >
    </li>
                   </ul>
                  </div>
              </a>
              {/* Solutions menu section */}
              <a href="/">
                <div className="relative" data-twe-dropdown-ref>
                <button
    className="flex items-center rounded px-2 pb-2 pt-2.5 text-[16px] font-sm "
    type="button"
    id="dropdownMenuButton19"
    data-twe-dropdown-toggle-ref
    aria-expanded="false"
    data-twe-ripple-init
    data-twe-ripple-color="light">
    Solutions
    <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
                  </button>
                   <ul
    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
    aria-labelledby="dropdownMenuButton19"
    data-twe-dropdown-menu-ref>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-[16px] font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Action</a
      >
    </li>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Another action</a
      >
    </li>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Something else here</a
      >
    </li>
                   </ul>
                  </div>
              </a>

              {/* Resources menu section */}

              <a href="/">
                <div className="relative" data-twe-dropdown-ref>
                <button
    className="flex items-center rounded px-2 pb-2 pt-2.5 text-[16px] font-sm "
    type="button"
    id="dropdownMenuButton19"
    data-twe-dropdown-toggle-ref
    aria-expanded="false"
    data-twe-ripple-init
    data-twe-ripple-color="light">
    Resources
    <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
                  </button>
                   <ul
    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
    aria-labelledby="dropdownMenuButton19"
    data-twe-dropdown-menu-ref>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-[16px] font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Action</a
      >
    </li>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Another action</a
      >
    </li>
    <li>
      <a
        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Something else here</a
      >
    </li>
                   </ul>
                  </div>
              </a>
              <a href="/">Enterprise</a>
              <a href="/">Pricing</a>
          </section>
          

          <section className="  flex flex-col  gap-6 items-center  w-full py-6">
          <a href="/"><span className="me-2">&#127760;</span>EN</a>
            <a href="/">Contact Sales</a>
            <a href="/">Login</a>
            <a
              href="/"
              className="bg-[#4262FF]  flex justify-center items-center rounded-[24px] w-fit lg:w-[150px] h-auto lg:h-[50px] text-white px-[17px] py-[22px] "
            >
              Sign up free →
            </a>
          </section>
        </div>
      )}

<button
              className="text-4xl md:hidden  text-red-400 "
              onClick={toggleMenu}
            >
             
                {showMenu ? 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6">  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />  </svg>
                 : 
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> </svg> 
                }
              
            </button>
    </div>
    );
};

export default Navbar;