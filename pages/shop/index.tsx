import React, { useState } from "react";
import { Layout } from "../../src/components/layout/Layout";
import { Card } from "../../src/components/card/Card";
import { gql, InMemoryCache, ApolloClient } from "@apollo/client";
const Shop = ({ data }: any) => {
  const { products } = data;
  return (
    <Layout>
      <div className="flex items-center w-full justify-between">
        <h1 className="text-2xl font-black text-indigo-600">Browse Products</h1>
        <div>
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className=" font-bold text-sm text-center inline-flex items-center text-slate-400 focus:text-indigo-600"
            type="button"
          >
            Filter By{" "}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            id="dropdown"
            className={`hidden absolute z-10 w-44 mt-1  list-none bg-white rounded divide-y divide-gray-100 border `}
          >
            <ul className="py-1" aria-labelledby="dropdownButton">
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-slate-700 hover:bg-indigo-100 hover:text-indigo-600"
                >
                  Date
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-slate-700 hover:bg-indigo-100 hover:text-indigo-600"
                >
                  Price: Low to High
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-slate-700 hover:bg-indigo-100 hover:text-indigo-600"
                >
                  Price: High to Low
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 mb-4 flex flex-wrap">
        {products.map((product: any, idx: any) => (
          <Card
            key={idx}
            id={product.id}
            img={product.image}
            title={product.name}
            description={product.description}
            price={"PHP " + product.price}
          />
        ))}
      </div>
      <div className="flex justify-center items-center pt-4 pd-4">
        <button className="font-bold text-indigo-600 hover:text-indigo-800">
          Load more
        </button>
      </div>
    </Layout>
  );
};

export default Shop;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query Query {
        products {
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
    `,
  });

  return {
    props: {
      data: data,
    },
  };
}
