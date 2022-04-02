import React from "react";
import Image from "next/image";
import style from "./jumbotron.module.css";
import { CgArrowLongRight } from "react-icons/cg";
import { useRouter } from "next/router";
export const Jumbotron = () => {
  const router = useRouter();
  return (
    <div className={style.jumbotron + ` shadow-lg`}>
      <div className="absolute z-10 p-4 md:p-8 h-full flex items-center ">
        <div className="md:max-w-lg">
          <h1 className="drop-shadow-lg text-white font-black text-3xl md:text-4xl text-sm">
            Get 50% OFF On All Products Today!
          </h1>
          <p className="drop-shadow text-white md:text-lg md:mt-1">
            Shop now and get amazing deals with free shipping only today.
          </p>
          <div className="mt-4">
            <button
              className="drop-shadow text-white font-bold flex items-center text-lg"
              onClick={() => router.push("/shop")}
            >
              Shop Now <CgArrowLongRight fontSize={28} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      <img src={`/images/jumbotron.jpg`} className={style.jumboImage} />
    </div>
  );
};
