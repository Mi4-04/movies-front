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
  ${CORE_MOVIE_FIELDS}
  mutation Mutation($addFavMoviesId: Float!) {
    addFavMovies(id: $addFavMoviesId) {
      ...CoreMovieFields
      user {
        id
      }
    }
  }
`;

export const UPDATE_WATCHED = gql`
  ${CORE_MOVIE_FIELDS}
  mutation UpdateWatched($updateWatchedId: Float!) {
    updateWatched(id: $updateWatchedId) {
      ...CoreMovieFields
    }
  }
`;

export const REMOVE_FAV_MOVIES = gql`
  ${CORE_MOVIE_FIELDS}
  mutation Mutation($removeFavMoviesId: Float!) {
    removeFavMovies(id: $removeFavMoviesId) {
      ...CoreMovieFields
    }
  }
`;
