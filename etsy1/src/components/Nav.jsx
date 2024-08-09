import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import SubNav from "./SubNav";

const Nav = () => {
     const [searchTerm, setSearchTerm] = useState("");

     const handleChange = (e) => {
       setSearchTerm(e.target.value);
     };

     const handleClear = () => {
       setSearchTerm("");
     };
  return (
    <div className="-mt-7 w-full navbar flex flex-col justify-between gap-2 bg-base-100 shadow-md">
      <div className=" w-full navbar flex justify-between gap-2 bg-base-100 ">
        {/* left side */}
        <div className=" flex-row-reverse md:flex-row gap-2 ">
          <a className="btn btn-ghost text-xl text-orange-500">Etsy</a>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <a className=" hidden md:flex btn btn-ghost text-xl">Category</a>
        </div>
        <div className="md:w-full w-40 flex-auto mx-4  relative ">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            className=" w-full input input-bordered pl-10 pr-10 rounded-l-full rounded-r-full"
          />
          {searchTerm && (
            <span
              className="absolute right-12 top-1/2 text-black transform -translate-y-1/2 cursor-pointer"
              onClick={handleClear}
            >
              <AiOutlineClose />
            </span>
          )}
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-orange-600 rounded-full p-1">
            <CiSearch />
          </span>
        </div>
        {/* right icons */}
        <div className="w-auto flex dropdown dropdown-end gap-2">
          <div className="w-24 hidden md:flex bg-transparent cursor-pointer">
            Sign in
          </div>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SubNav />
      </div>
    </div>
  );
};

export default Nav;
