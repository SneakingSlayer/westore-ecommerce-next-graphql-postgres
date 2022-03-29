import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className=" pl-4 pr-4 sm:flex sm:justify-between sm:items-center pb-5 pt-5 border-b ">
        <h1 className="mb-2 sm:mb-0 text-4xl text-indigo-600 font-black text-center">
          westore.
        </h1>
        <ul className="flex space-x-2 justify-center">
          <li className="border border-1 border-slate-400 p-2 rounded-full">
            <a>
              <FaFacebookF fontSize={18} className="text-slate-400" />
            </a>
          </li>
          <li className="border border-1 border-slate-400 p-2 rounded-full">
            <a>
              <FaInstagram fontSize={18} className="text-slate-400" />
            </a>
          </li>
          <li className="border border-1 border-slate-400 p-2 rounded-full">
            <a>
              <FaTwitter fontSize={18} className="text-slate-400" />
            </a>
          </li>
          <li className="border border-1 border-slate-400 p-2 rounded-full">
            <a>
              <FaYoutube fontSize={18} className="text-slate-400" />
            </a>
          </li>
        </ul>
      </div>
      <div className="pl-4 pr-4 sm:flex sm:justify-between sm:items-center pb-5 pt-5">
        <p className="text-sm text-slate-400 text-center">
          © 2022 <span className="font-black">Westore.</span> All Rights
          Reserved
        </p>
        <p className="text-sm text-slate-400 text-center">
          Designed and Developed By{" "}
          <span className="font-black">Lance Endaya</span>
        </p>
      </div>
    </footer>
  );
};
