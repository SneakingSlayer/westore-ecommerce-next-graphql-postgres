import React, { useState, useContext } from "react";
import { Layout } from "../../src/components/layout/Layout";
import { BiShoppingBag } from "react-icons/bi";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import {
  ApolloClient,
  gql,
  InMemoryCache,
  useMutation,
  useQuery,
} from "@apollo/client";
import { Loader } from "../../src/components/loader/Loader";
import styles from "./product.module.css";
import { Toast } from "../../src/components/toast/Toast";
import { GlobalContext } from "../../src/context/GlobalState";
import { ADD_TO_CART } from "../../graphql/client/mutations";
import {
  GET_PRODUCT,
  GET_ALL_CART_ITEMS,
  AUTHENTICATION,
} from "../../graphql/client/queries";
const Product = ({ data }: any) => {
  const router = useRouter();
  const { show, setToast } = useContext(GlobalContext);

  const [count, setCount] = useState<number>(1);
  const handleIncrement = () => {
    if (count >= 99) return;
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };

  const [addToCartMutation, { loading }] = useMutation(
    ADD_TO_CART(data, count),
    {
      refetchQueries: [
        {
          query: GET_ALL_CART_ITEMS,
        },
      ],
    }
  );

  const { error } = useQuery(AUTHENTICATION);

  return (
    <Layout>
      {show ? <Toast /> : null}
      {!data ? (
        <p>loading...</p>
      ) : !data.product ? (
        <p>no items found.</p>
      ) : (
        <div className="md:w-1/2 md:flex md:flex-wrap md:w-full md:items-center">
          <div className=" mb-4 md:w-1/2 h-full">
            <div className={styles.pImgWrapper}>
              <img src={`${data.product.image}`} className={styles.pImg} />
            </div>
          </div>
          <div className="md:w-1/2 h-full md:pl-7">
            <div className="mb-4">
              <p className="font-bold text-lg text-slate-700">
                {data.product.name}
              </p>
              <p className="text-2xl text-indigo-600 font-black">
                PHP {data.product.price}
              </p>
            </div>

            <p className="mb-4 text-slate-700">{data.product.description}</p>

            <div className="flex items-center">
              <div className="w-1/3">
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                  <button
                    data-action="decrement"
                    className="focus:bg-slate-200 border border-gray-300 h-full w-20 rounded-l cursor-pointer outline-none"
                    onClick={handleDecrement}
                    value={count}
                  >
                    <span className="m-auto text-2xl font-thin">−</span>
                  </button>
                  <input
                    type="number"
                    className="border-x-0 outline-none focus:outline-none text-center w-full border border-gray-300  font-semibold text-md  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                    name="custom-input-number"
                    min={1}
                    value={count}
                    readOnly
                  />
                  <button
                    data-action="increment"
                    className="focus:bg-slate-200 border border-gray-300  h-full w-20 rounded-r cursor-pointer"
                    onClick={handleIncrement}
                  >
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
              <p className="ml-4 text-slate-400 text-sm">
                {data.product.quantity} pieces left
              </p>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (error) {
                  router.push("/signin");
                  return;
                }
                addToCartMutation();
                setToast();
              }}
              disabled={loading ? true : false}
              className="mt-4 text-center inline-flex  justify-center bg-indigo-600 text-white font-bold w-full p-4 rounded-xl hover:bg-indigo-700"
            >
              {loading ? (
                <Loader />
              ) : (
                <>
                  <BiShoppingBag fontSize={21} className="mr-1" /> Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Product;

export async function getStaticPaths({ params }: any) {
  return {
    paths: [],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps({ params }: any) {
  const { id } = params;
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
  });

  try {
    const { data } = await client.query({
      query: GET_PRODUCT(id),
    });

    return {
      props: {
        data: data,
      },
    };
  } catch (e) {
    return {
      props: {
        data: {
          product: false,
        },
      },
    };
  }
}
