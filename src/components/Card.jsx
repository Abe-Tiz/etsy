import React from "react";

const Card = () => {
  const products = [
    {
      id: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Football_field.svg",
      title: "Football Field Pencil Case",
      price: 19.0,
      rating: 4.5,
      reviews: 224,
    },
  ];

  return (
    <div>
      {products.map((product) => {
        <div
          key={product.id}
          className=" bg-white flex gap-3 p-4 rounded shadow-md"
        >
          <img
            className="w-56 h-48 object-cover"
            src={product.image}
            alt={product.title}
          />
          <div>
            <h3 className="mt-2 text-lg font-bold">{product.title}</h3>
            <p className="mt-1 text-gray-600">${product.price.toFixed(2)}</p>
            <div className="mt-2 flex items-center">
              <span className="text-yellow-500">
                {"★".repeat(Math.floor(product.rating))}
              </span>
              <span className="ml-2 text-gray-600">({product.reviews})</span>
            </div>
            <button className="mt-2 border-2 border-black p-3 rounded-full">
              Shop this item
            </button>
          </div>
        </div>;
      })}
    </div>
  );
};

export default Card;
