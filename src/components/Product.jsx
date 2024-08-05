import React from "react";
import productImage from "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTN7j781XRbvJasAntQdbChWs_scJcASRZSg&s";
import item1 from "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgnTTduE_Sd3J5Kf-0Gld1mtc7P3Y45PDwJ1zFWzhp-Ypq4cWCZFzkaG7mCn-i5EOHfG8&usqp=CAU";
import item2 from "https://5.imimg.com/data5/AL/RP/GQ/SELLER-57010916/electronic-products-500x500.jpg";
import item3 from "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Bph-g3hMfnKwbYmHsJTMWmAZT0_QP_R1uw&s";
import item4 from "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXII42_RudcGNQq3HD5YzcrNlvef-ZtOxRw&s";
import item5 from "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNoL2l6dvOS0O3nx9px2QLEZivfk_Z8YCxg&s";
import item6 from "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUl7Oyp-7SY6UnpABxdhGShRSwD_ud-q7H2g&s";

const Product = () => {
  const items = [
    {
      id: 1,
      name: "Personalized Soccer Ball Notebook",
      price: "$18.00",
      imgSrc: item1,
    },
    {
      id: 2,
      name: "Soccer Balls Pattern Headband",
      price: "$18.00",
      imgSrc: item2,
    },
    {
      id: 3,
      name: "Soccer Ball Necklace-Football",
      price: "$50.79",
      imgSrc: item3,
    },
    {
      id: 4,
      name: "Women's Personalized Football",
      price: "$13.27",
      imgSrc: item4,
    },
    { id: 5, name: "Goal Print in Green", price: "$13.33", imgSrc: item5 },
    {
      id: 6,
      name: "Personalized Football Cufflinks",
      price: "$37.52",
      imgSrc: item6,
    },
  ];
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4">
        <header className="flex flex-col sm:flex-row justify-between items-center py-4 space-y-4 sm:space-y-0">
          <div className="text-2xl font-bold text-orange-600">Etsy</div>
          <input
            type="text"
            placeholder="Search"
            className="border rounded p-2 w-full sm:w-auto"
          />
          <div className="flex space-x-4">
            <button className="bg-gray-200 p-2 rounded">Sign In</button>
            <button className="bg-gray-200 p-2 rounded">Cart</button>
          </div>
        </header>
        <main className="container mx-auto">
          <section className="bg-white p-4 rounded shadow">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <img
                src={productImage}
                alt="Main item"
                className="w-full sm:w-1/3 rounded"
              />
              <div className="flex flex-col justify-between">
                <h2 className="text-xl font-bold">
                  Football Field Pencil Case
                </h2>
                <p className="text-green-600 font-bold">$19.00</p>
                <button className="bg-blue-500 text-white p-2 rounded">
                  Shop this item
                </button>
              </div>
            </div>
          </section>
          <section className="mt-8">
            <h3 className="text-lg font-bold mb-4">Etsy's Picks</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded shadow">
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded"
                  />
                  <h4 className="mt-2 text-sm font-bold">{item.name}</h4>
                  <p className="mt-1 text-gray-600">{item.price}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Product;
