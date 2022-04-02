import React from "react";
import { Layout } from "../../src/components/layout/Layout";
import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";
import { Card } from "../../src/components/card/Card";
import { SEARCH_PRODUCT } from "../../graphql/client/queries";
const Search = ({ data }: any) => {
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-black text-indigo-600">Search Results</h1>
        <p className="text-sm text-slate-400">Showing 9 results</p>
      </div>

      {!data ? (
        <p>loading...</p>
      ) : data.search.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 mb-4 flex flex-wrap">
          {data.search.map((product: any, idx: any) => (
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
      ) : (
        <p>Sorry we could not find what you're looking for.</p>
      )}
    </Layout>
  );
};

export async function getStaticPaths({ params }: any) {
  return {
    paths: [],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps({ params }: any) {
  const { search } = params;
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
  });

  try {
    const { data } = await client.query({
      query: SEARCH_PRODUCT(search),
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

export default Search;
