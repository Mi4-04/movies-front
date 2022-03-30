import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({ uri: process.env.REACT_APP_SERVER_API });

const authMiddleware = setContext((_, { headers }) => {
  const authToken = localStorage.getItem("accessToken");

  return {
    headers: {
      ...headers,
      authorization: authToken ? `Bearer ${authToken}` : "",
    },
  };
});

const cache = new InMemoryCache({});

export const useAppApolloClient = () => {
  return new ApolloClient({
    link: authMiddleware.concat(httpLink),
    cache,
  });
};
