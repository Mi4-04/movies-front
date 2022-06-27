import { URL, PATH_GENRE, PATH_MOVIES, PATH_MOVIE_ID } from "@app/constant";
import axios from "axios";

export interface IGenre {
  id: number;
  name: string;
  isClick: boolean;
}

export interface IMovies {
  adulit: boolean;
  backdropPath: string | null;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string | null;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  watched: boolean;
}

const getUrl = (path: string): string => {
  const urls = URL + path + "?api_key=" + process.env.REACT_APP_API_KEY;
  return urls;
};

export const getMoviesList = async (
  page: number,
  sortBy: string,
  year: string,
  voteAverage: number,
  genre_ids: number[]
): Promise<IMovies[]> => {
  const res = await axios({
    method: "GET",
    url: `${getUrl(
      PATH_MOVIES
    )}&language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&page=${page}&with_genres=${genre_ids.join()}&year=${year}&voteAverage.gte=${voteAverage}`,
  });
  return res.data.results;
};

export const getGenreList = async (): Promise<IGenre[]> => {
  const res = await axios({
    method: "GET",
    url: `${getUrl(PATH_GENRE)}`,
  });

  return res.data.genres;
};

export const getMovieDetails = async (id: number): Promise<IMovies> => {
  const url =
    URL + PATH_MOVIE_ID + id + "?api_key=" + process.env.REACT_APP_API_KEY;

  const res = await axios({
    method: "GET",
    url: `${url}&language=en-US`,
  });

  return res.data;
};

export const isValidFilmsIdAndFilms = (): void => {
  if (typeof window !== "undefined") {
    !localStorage.getItem("filmsIds") &&
      localStorage.setItem("filmsIds", JSON.stringify([]));
  }
};
