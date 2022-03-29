import { gql } from "@apollo/client";

const CORE_GET_MOVIES_FIELDS = gql`
  fragment CoreGetMoviesFields on FavMoviesDto {
    id
    popularity
    title
    vote_average
    release_date
    poster_path
  }
`;

export const GET_ALL_GENRES = gql`
  query Genres {
    genres {
      id
      name
    }
  }
`;

export const GET_ALL_MOVIES = gql`
  ${CORE_GET_MOVIES_FIELDS}
  query GetAllMovies(
    $genresIds: [Float!]!
    $page: Float!
    $voteAverage: Float!
    $year: String!
  ) {
    getAllMovies(
      genresIds: $genresIds
      page: $page
      voteAverage: $voteAverage
      year: $year
    ) {
      ...CoreGetMoviesFields
    }
  }
`;

export const GET_MOVIE_DETAILS = gql`
${CORE_GET_MOVIES_FIELDS}
  query GetMovieDetails($getMovieDetailsId: Float!) {
    getMovieDetails(id: $getMovieDetailsId) {
    ...CoreGetMoviesFields
    }
  }
`;
