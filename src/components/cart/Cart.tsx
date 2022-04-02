import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { CgArrowLongRight } from "react-icons/cg";
import { CartItem } from "../cartitem/CartItem";
import { BiShoppingBag } from "react-icons/bi";
import { gql, useQuery } from "@apollo/client";
import { GET_ALL_CART_ITEMS } from "../../../graphql/client/queries";
export const Cart = (props: any) => {
  const { isOpen, setIsOpen } = props;

  const { data, loading, error } = useQuery(GET_ALL_CART_ITEMS);

  return (
    <main
      className={
        " fixed  z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out h-full " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " delay-200 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-md right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="overflow-hidden relative w-screen max-w-md  flex flex-col   h-full">
          <div className="flex w-full justify-between items-center border-b border-gray-300 p-7">
            <h1 className="font-bold text-2xl flex ">
              <BiShoppingBag className="mr-2" fontSize={28} /> Shopping Cart
            </h1>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <IoClose fontSize={26} />
            </button>
          </div>
          <div className="h-full p-7 overflow-auto">
            {loading ? (
              <p>loading</p>
            ) : !error ? (
              data.cart.length > 0 ? (
                data.cart.map((item: any, idx: any) => (
                  <CartItem
                    key={idx}
                    id={item.id}
                    img={item.Product.image}
                    price={item.Product.price}
                    title={item.Product.name}
                    description={item.Product.description}
                    quantity={item.quantity}
                  />
                ))
              ) : (
                <p className="text-center italic text-slate-400">
                  Your cart is empty.
                </p>
              )
            ) : null}
          </div>

          <div className="border-t border-gray-300 p-7">
            <button className=" text-center inline-flex  items-center justify-center bg-indigo-600 text-white font-bold w-full p-4 rounded-xl hover:bg-indigo-700">
              Proceed to Checkout{" "}
              <CgArrowLongRight fontSize={32} className="ml-2" />
            </button>
          </div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};
