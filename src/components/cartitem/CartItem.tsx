import React from "react";
import { CgTrash } from "react-icons/cg";
import styles from "./cartitem.module.css";
import { gql, useMutation } from "@apollo/client";
import { Loader } from "../loader/Loader";
import { GET_ALL_CART_ITEMS } from "../../../graphql/client/queries";
import { DELETE_FROM_CART } from "../../../graphql/client/mutations";
interface propTypes {
  id: String;
  title: String;
  img: String;
  description: String;
  price: String;
  quantity: String;
}
export const CartItem = (props: propTypes) => {
  const [deleteFromCartMutation, { data, loading, error }] = useMutation(
    DELETE_FROM_CART(props.id),
    {
      refetchQueries: [
        {
          query: GET_ALL_CART_ITEMS,
        },
      ],
    }
  );
  return (
    <div className="flex items-center justify-between mb-6 ">
      <div className="flex items-center">
        <div className={styles.cardImgWrapper}>
          <img src={`${props.img}`} className={styles.cardImg} />
        </div>
        <div className="ml-4">
          <p className="font-bold ">{props.title}</p>
          <p className="text-indigo-600 font-bold">PHP {props.price}</p>
          <p className=" text-slate-400 text-sm">Qty. {props.quantity}</p>
        </div>
      </div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            deleteFromCartMutation();
          }}
        >
          {loading ? (
            <Loader />
          ) : (
            <CgTrash
              fontSize={28}
              className="text-red-500 hover:text-red-600"
            />
          )}
        </button>
      </div>
    </div>
  );
};
