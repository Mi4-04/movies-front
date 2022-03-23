import { gql } from "@apollo/client";

export const GET_ALL_GENRES = gql`
  query Genres {
    genres {
      id
      name
    }
  }
`;

export const GET_ALL_MOVIES = gql`
  query Query($genresIds: [Float!]!, $voteAverage: Float!, $year: String!) {
    getAllMovies(
      genresIds: $genresIds
      voteAverage: $voteAverage
      year: $year
    ) {
      id
      popularity
      title
      vote_average
      release_date
      poster_path
    }
  }
`;

export const GET_MOVIE_DETAILS = gql`
  query GetMovieDetails($getMovieDetailsId: Float!) {
    getMovieDetails(id: $getMovieDetailsId) {
      id
      popularity
      title
      release_date
      poster_path
    }
  }
`;
