import React from "react";
import { useRouter } from "next/router";
import { BiShoppingBag } from "react-icons/bi";
import styles from "./card.module.css";
import { gql, useMutation } from "@apollo/client";
import { Toast } from "../toast/Toast";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
const cookieCutter = require("cookie-cutter");

interface propTypes {
  id: String;
  title: String;
  img: String;
  description: String;
  price: String;
}

export const Card = (props: propTypes) => {
  const { setToast } = useContext(GlobalContext);

  const router = useRouter();
  const handleNavigateToProduct = (e: any) => {
    e.preventDefault();
    router.push(`/product/${props.id}`);
  };

  const AddToCart = gql`
    mutation Mutation {
      addToCart(productId: "${props.id}") {
        productId
      }
    }
  `;

  const [addToCartMutation, { data, loading, error }] = useMutation(AddToCart, {
    refetchQueries: [
      {
        query: gql`
          query Cart {
            cart {
              quantity
              Product {
                id
                name
                price
                description
                quantity
                image
                Category {
                  name
                }
              }
            }
          }
        `,
      },
    ],
  });

  return (
    <div
      className={
        styles.card +
        " rounded-xl border bg-white p-4  flex flex-col justify-between"
      }
    >
      <div className={styles.cardImgWrapper}>
        {/** <p className="text-center bg-indigo-100 text-indigo-600 p-20 rounded-xl">
            {props.img}
          </p>*/}
        <img src={`${props.img}`} className={styles.cardImg} />
      </div>
      <div className="product-info mb-6">
        <p
          className="line-clamp-1 text-lg font-bold text-slate-700 hover:cursor-pointer hover:text-indigo-600"
          onClick={handleNavigateToProduct}
        >
          {props.title}
        </p>
        <p className="text-slate-600 line-clamp-2">{props.description}</p>
      </div>

      <div className="cta flex w-full justify-between items-center">
        <p className="font-bold text-slate-700">{props.price}</p>
        <button
          className="font-bold flex text-indigo-600"
          onClick={(e) => {
            e.preventDefault();
            addToCartMutation();
            setToast();
          }}
        >
          <BiShoppingBag fontSize={21} className="mr-1" /> Add to Cart
        </button>
      </div>
    </div>
  );
};
