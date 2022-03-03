import React from "react";
import { getMoviesList, IGenre } from "@app/utils/movies";
import { DEFAULT_PAGE, DEFAULT_SORT_BY } from "@app/constant";
import { MoviesItemBlock } from "./component/MoviesItemBlock";
import { MoviesLayout } from "./style";
import { MoviesItemList } from "./component/MoviesItemList";

interface IMoviesList {
  genres: IGenre[];
  year: string;
  voteAverage: number;
  blockView: boolean;
  genresId: number[];
}

export const MoviesList = ({
  genres,
  year,
  voteAverage,
  blockView,
  genresId,
}: IMoviesList) => {
  const [movies, setMovies] = React.useState<any[]>([]);

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
          <MoviesItemBlock key={index} film={film} />
        ) : (
          <MoviesItemList key={index} film={film} />
        );
      })}
    </MoviesLayout>
  );
};
