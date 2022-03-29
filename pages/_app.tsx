import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apollo";
import { GlobalProvider } from "../src/context/GlobalState";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </ApolloProvider>
  );
}

export default MyApp;
