import React from "react";
import Image from "next/image";
import style from "./jumbotron.module.css";
import { CgArrowLongRight } from "react-icons/cg";
export const Jumbotron = () => {
  return (
    <div className={style.jumbotron}>
      <div className="absolute z-10 p-4 md:p-8 h-full flex items-center ">
        <div className="md:max-w-lg">
          <h1 className=" text-white font-black text-3xl md:text-4xl">
            Get 50% OFF On All Products Today!
          </h1>
          <p className="text-white md:text-lg md:mt-1">
            Shop now and get amazing deals with free shipping only today.
          </p>
          <div className="mt-4">
            <button className="text-white font-bold flex items-center text-lg">
              Shop Now <CgArrowLongRight fontSize={28} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      <Image
        src={`/images/jumbotron.jpg`}
        alt="Jumbotron"
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="cover"
      />
    </div>
  );
};
