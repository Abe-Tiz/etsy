import React from 'react'

const CardItems = () => {
  return (
    <>
      <div className="mt-5 card card-side bg-base-100">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <div>
            <p className="card-title ">
              <span className="text-gray-500 underline text-sm">efratul</span>
              ★★★★★(224)
            </p>
          </div>
          <h2 className="card-title">
            Football Field Pencil Case, Soccer Field Zipper pouch, kid's Pencil
            Case, Back to School, Sport Lover Gift,Student Gift Idea, Gift For
            Kids
          </h2>
          <div>
            <h2 className="card-title ">USD 19.00</h2>
          </div>
          <h5 className="card-title text-gray-800 text-sm badge badge-success gap-2">
            FREE shipping
          </h5>
          <button className=" text-black border-2 border-black w-48 rounded-full p-1">
            Shop this item
          </button>
        </div>
      </div>
      <hr className="border-t-1 border-gray-400 w-full" />
    </>
  );
}

export default CardItems;
