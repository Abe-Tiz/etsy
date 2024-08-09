import React from 'react'

const ItemsList = () => {
  return (
    <>
      <div className=" bg-base-100 min-h-screen p-4">
        <div className="bg-white p-4 rounded">
          <img
            src="https://5.imimg.com/data5/AL/RP/GQ/SELLER-57010916/electronic-products-500x500.jpg"
            alt="item-name"
            className="w-full h-48 object-cover rounded"
          />
          <h4 className="mt-2 text-sm text-gray-500 font-bold">
            Soccer Balls Pattern Headband
          </h4>
          <p className="mt-1 text-gray-600">
            ★★★★★<span className='text-gray-500'>(327)</span>
          </p>
          <p className="mt-1 text-black">USD 50.79</p>
          <p className="mt-1 text-gray-600">DreamBeadsDovi</p>
        </div>
      </div>
    </>
  );
}

export default ItemsList
