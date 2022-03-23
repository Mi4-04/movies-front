import { gql } from "@apollo/client";

export const AUTH_USER = gql`
  mutation Mutation($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      accessToken
    }
  }
`;

export const ADD_FAV_MOVIES = gql`
  mutation Mutation($addFavMoviesId: Float!) {
    addFavMovies(id: $addFavMoviesId) {
      moviesId
      watched
      user {
        id
        login
        password
        createDate
      }
      createDate
      id
    }
  }
`;

export const UPDATE_WATCHED = gql`
  mutation UpdateWatched($updateWatchedId: Float!) {
    updateWatched(id: $updateWatchedId) {
      id
      moviesId

      watched
      createDate
    }
  }
`;

export const REMOVE_FAV_MOVIES = gql`
  mutation Mutation($removeFavMoviesId: Float!) {
    removeFavMovies(id: $removeFavMoviesId) {
      id
      moviesId
      watched
      createDate
    }
  }
`;
