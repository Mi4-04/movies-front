import React from "react";
import { AppProps } from "next/app";
import { useAppApolloClient } from "@app/config/apolloClient";
import { ApolloProvider } from "@apollo/client";

import { PrivateRoute } from "@app/components/PrivateRouter";
import { MoviesProvide } from "@app/utils/movies-context";
import "@app/i18n/config";
import Header from "@app/components/Header";
import { isValidFilmsIdAndFilms } from "@app/utils/movies";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useAppApolloClient();
  isValidFilmsIdAndFilms();
  return (
    <ApolloProvider client={apolloClient}>
      <MoviesProvide>
        <Header />
        <PrivateRoute>
          <Component {...pageProps} />
        </PrivateRoute>
      </MoviesProvide>
    </ApolloProvider>
  );
};

export default MyApp;
