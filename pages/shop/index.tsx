import React, { useState, useEffect } from "react";
import { Layout } from "../../src/components/layout/Layout";
import { Card } from "../../src/components/card/Card";
import { gql, InMemoryCache, ApolloClient, useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../graphql/client/queries";
const Shop = ({ data }: any) => {
  const { products } = data;
  const [page, setPage] = useState<number>(9);
  return (
    <Layout>
      <div className="flex items-center w-full justify-between">
        <h1 className="text-2xl font-black text-indigo-600">Browse Products</h1>
        <div>
          <p className="text-sm text-slate-400">
            Showing {page} of {products.length}
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 mb-4 flex flex-wrap">
        {products.slice(0, page).map((product: any, idx: any) => (
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
        {page >= products.length ? null : (
          <button
            onClick={() => {
              if (page + 9 > products.length) {
                setPage(products.length);
                return;
              }
              setPage(page + 9);
              return;
            }}
            className="font-bold text-indigo-600 hover:text-indigo-800"
          >
            Load more
          </button>
        )}
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
    query: GET_ALL_PRODUCTS,
  });

  return {
    props: {
      data: data,
    },
  };
}
