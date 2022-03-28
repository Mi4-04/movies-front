import { gql } from "@apollo/client";

const CORE_MOVIE_FIELDS = gql`
  fragment CoreMovieFields on Movie {
    id
    moviesId
    watched
    createDate
  }
`;

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
      id
      moviesId
      watched
      createDate
      user {
        id
      }
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
