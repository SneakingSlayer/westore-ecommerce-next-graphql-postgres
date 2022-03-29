import React, { useState, useEffect } from "react";
import styles from "./toast.module.css";
import { BiShoppingBag } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import FadeIn from "react-fade-in/lib/FadeIn";
export const Toast = () => {
  const [show, setShow] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, []);
  return (
    <FadeIn>
      <div className="container mx-auto  flex justify-center fixed bottom-4">
        <div
          id="toast-default"
          className={
            " flex items-center w-full max-w-xs p-4 text-gray-500 bg-indigo-600 rounded-lg shadow-md dark:text-gray-400 dark:bg-gray-800"
          }
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
            <BiShoppingBag className="text-indigo-600" fontSize={24} />
          </div>
          <div className="ml-3 text-sm text-white">Item added to cart!</div>
          <button
            type="button"
            className="ml-auto  text-white rounded-lg   "
            data-dismiss-target="#toast-default"
            aria-label="Close"
          >
            <CgClose className="font-bold" fontSize={21} />
          </button>
        </div>
      </div>
    </FadeIn>
  );
};
