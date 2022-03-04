import { IMovies } from "@app/utils/movies";

export interface IMovieProps {
  watched: boolean;
}

export interface IMovieItem {
  film: IMovies;
  filmsIds: number[];
  saveFilm: (id: number) => void;
}
