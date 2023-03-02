import React from 'react'
import { BsFillCartFill } from 'react-icons/bs';
import Category from './Category';

export const Banner = () => {
  return (
    <div className="max-w-[900px] mx-auto p-4 py-3 bg-gray-500/10 rounded-b-xl sticky top-12 justify-center">
      <div className="flex justify-between">
        <Category />
        <button className="flex p-2 items-center rounded-lg">
          <BsFillCartFill
            size={20}
            className="icon"
            style={{ color: "#fffff" }}
          />
          <h2 className="font-bold">Panier</h2>
        </button>
      </div>
    </div>
  );
}

export default Banner