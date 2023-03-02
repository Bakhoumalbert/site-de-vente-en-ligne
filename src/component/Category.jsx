import React from 'react'
import { SiDell, SiAsus, SiLenovo } from "react-icons/si";
import { BsApple } from "react-icons/bs";
import { TiVendorMicrosoft } from "react-icons/ti";

const Category = () => {
    
    return (
    <div className="flex w-full flex-row justify-between items-center gap-12 px-3">
      <SiDell size={20} />
      <BsApple size={20} />
      <img className="w-5" src="hp.png" alt="hp" />
      <SiAsus size={30} />
      <SiLenovo size={30} />
      <TiVendorMicrosoft size={20} />
    </div>
  );
};

export default Category