import React, { useState } from "react";
import ItemsList from "./ItemsList";
import { AiOutlineClose } from "react-icons/ai";

const ProductItems = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <div className="flex flex-col justify-start">

        <div className="flex justify-between mt-5 -mb-3">
          <p className="bg-transparent border-2 border-gray-900 rounded-full px-2 hidden md:block">
            All Filters
          </p>
          <div className="flex gap-3 items-center">
            <p className="hidden md:block">1,000+ results, with Ads ?</p>
            <div className="border-2 border-gray-900 rounded-full px-2 bg-transparent hidden md:flex">
              <span>sort by:</span>
              <select className="border-0 bg-transparent p-1 outline-none">
                <option value="most-relevant">Most Relevant</option>
                <option value="price-to-high">Price: low to high</option>
                <option value="top-review">Top review</option>
                <option value="newest">Newest</option>
              </select>
            </div>
            {/* Mobile Button */}
            <button
              className="md:hidden border-2 border-gray-900 rounded-full px-2 bg-transparent"
              onClick={toggleMobileMenu}
            >
              Filters
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden flex flex-col gap-2 mt-2">
              <div className="border-2 border-gray-900 rounded-full px-2 bg-transparent">
                <span>sort by:</span>
                <select className="border-0 bg-transparent p-1 outline-none">
                  <option value="most-relevant">Most Relevant</option>
                  <option value="price-to-high">Price: low to high</option>
                  <option value="top-review">Top review</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8">
          <button className="flex justify-between items-center bg-base-200 rounded-full p-2">
            ets'y picks{" "}
            <span className="text-black ">
              <AiOutlineClose />
            </span>
          </button>{" "}
        </div>

        <div className="hidden md:flex justify-between mt-5 -mb-3">
          <p className="text-gray-600 p-2">Ets's pick</p>
          <button className="bg-transparent border-2 border-gray-900 rounded-full px-2">
            see more
          </button>
        </div>

        <div className="mt-3 bg-white flex flex-row  gap-4">
          <ItemsList />
          <ItemsList />
          <ItemsList />
          <ItemsList />
        </div>
      </div>
    </>
  );
};

export default ProductItems;
