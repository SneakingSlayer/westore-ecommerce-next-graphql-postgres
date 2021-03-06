import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { Cart } from "../cart/Cart";
import Link from "next/link";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import styles from "./navbar.module.css";
import { FaSignOutAlt } from "react-icons/fa";
import { AUTHENTICATION } from "../../../graphql/client/queries";
import { SIGN_OUT } from "../../../graphql/client/mutations";

export const Navbar = () => {
  const router = useRouter();
  const [menu, setMenu] = useState<boolean>(false);
  const [drawer, setDrawer] = useState<boolean>(false);
  const [search, setSearch] = useState<String>("");

  const handleOpenMenu = () => {
    if (menu) {
      setMenu(false);
      return;
    }
    setMenu(true);
  };

  const handleOpenDrawer = (e: any) => {
    e.preventDefault();
    setDrawer(true);
  };

  const { data, loading, error } = useQuery(AUTHENTICATION);

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (search === "") return;
    router.push(`/search/${search}`);
  };

  const [logoutMutation] = useMutation(SIGN_OUT, {
    refetchQueries: [
      {
        query: AUTHENTICATION,
      },
    ],
  });

  return (
    <nav className="w-100 ">
      {!error ? <Cart isOpen={drawer} setIsOpen={setDrawer} /> : null}
      <div className="container flex flex-wrap justify-between items-center h-20 pl-4 pr-4">
        <div className="navbrand ">
          <Link href="/">
            <h1 className="text-3xl font-black text-indigo-600 hover:cursor-pointer ">
              westore.
            </h1>
          </Link>
        </div>
        <div className="search-wrapper md:block hidden  grow relative">
          <IoSearch
            className="absolute left-7 top-3"
            color="#bbb"
            fontSize={20}
          />
          <form onSubmit={handleSearch}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="What are you looking for?"
              className=" text-sm w-11/12 ml-4 mr-4 p-3 pl-9 border border-gray-300 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 focus:outline-none"
            />
          </form>
        </div>
        {!error ? (
          <div className="nav-cta flex items-center">
            <button className="mr-2 relative " onClick={handleOpenDrawer}>
              <BiShoppingBag fontSize={28} className="text-slate-700" />
              {loading ? null : data.cart.length > 0 ? (
                <div className={styles.notificationBadge}>
                  {data.cart.length}
                </div>
              ) : null}
            </button>
            <button
              onClick={async () => {
                await logoutMutation();
                window.location.href = "/signin";
              }}
              className="md:block hidden ml-1"
            >
              <FaSignOutAlt fontSize={26} className="text-slate-700" />
            </button>
            <button
              className="md:hidden block border border-gray-300 rounded p-1 ml-2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              onClick={handleOpenMenu}
            >
              <HiMenuAlt3 fontSize={28} />
            </button>
          </div>
        ) : (
          <button
            className="font-bold text-indigo-600"
            onClick={() => router.push("/signin")}
          >
            Sign In
          </button>
        )}
      </div>
      <div className={`mobile-menu md:hidden ${!menu ? "hidden" : ""}`}>
        <div className="container pl-4 pr-4">
          <div className="search-wrapper w-full relative">
            <IoSearch
              className="absolute top-3 left-6  md:left-3 md:top-2.5"
              color="#bbb"
              fontSize={20}
            />
            <form onSubmit={handleSearch}>
              <input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="What are you looking for?"
                className=" text-sm w-11/12 ml-4 mr-4 p-3 pl-9 border border-gray-300 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 focus:outline-none"
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};
