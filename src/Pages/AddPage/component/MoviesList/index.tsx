import React from "react";
import { getMoviesList, IGenre, IMovies } from "@app/utils/movies";
import { DEFAULT_PAGE, DEFAULT_SORT_BY } from "@app/constant";
import { MoviesItemBlock } from "./component/MoviesItemBlock";
import { MoviesLayout } from "./style";
import { MoviesItemList } from "./component/MoviesItemList";

interface IMoviesList {
  year: string;
  voteAverage: number;
  blockView: boolean;
  genresId: number[];
}

export const MoviesList = ({
  year,
  voteAverage,
  blockView,
  genresId,
}: IMoviesList) => {
  const [movies, setMovies] = React.useState<IMovies[]>([]);

  const [filmsIds, setFilmsIds] = React.useState<number[]>(
    JSON.parse(localStorage["filmsIds"])
  );

  const saveFilm = (id: number): void => {
    const newfilmsIds = [...filmsIds, id];
    setFilmsIds(newfilmsIds);
    localStorage.setItem("filmsIds", JSON.stringify(newfilmsIds));
  };

  React.useEffect(() => {
    getMoviesList(
      DEFAULT_PAGE,
      DEFAULT_SORT_BY,
      year,
      voteAverage,
      genresId
    ).then((res) => {
      setMovies(res);
    });
  }, [year, voteAverage, genresId]);

  return (
    <MoviesLayout blockView={blockView}>
      {movies?.map((film, index) => {
        return blockView ? (
          <MoviesItemBlock key={index} film={film}  filmsIds = {filmsIds} saveFilm = {saveFilm} />
        ) : (
          <MoviesItemList key={index} film={film} filmsIds = {filmsIds} saveFilm = {saveFilm} />
        );
      })}
    </MoviesLayout>
  );
};
