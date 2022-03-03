import React from "react";
import { getMoviesList, IGenre } from "@app/utils/movies";
import { DEFAULT_PAGE, DEFAULT_SORT_BY } from "@app/constant";
import { MoviesItemBlock } from "./component/MoviesItemBlock";
import { MoviesLayout } from "./style";
import { MoviesItemList } from "./component/MoviesItemList";

export const MoviesList = (props: {
  genres: IGenre[];
  year: string;
  voteAverage: number;
  blockView: boolean;
  genresId: number[];
}) => {
  const [movies, setMovies] = React.useState<any[]>([]);

  const [filmsIds, setFilmsIds] = React.useState<number[]>(
    JSON.parse(localStorage["filmsIds"])
  );

  React.useEffect(() => {
    getMoviesList(
      DEFAULT_PAGE,
      DEFAULT_SORT_BY,
      props.year,
      props.voteAverage,
      props.genresId
    ).then((res) => {
      setMovies(res);
    });
  }, [props.year, props.voteAverage, props.genresId]);

  const saveFilm = (id: number): void => {
    let newfilmsIds = [...filmsIds, id];
    setFilmsIds(newfilmsIds);
    localStorage.setItem("filmsIds", JSON.stringify(newfilmsIds));
  };

  return (
    <MoviesLayout blockView={props.blockView}>
      {movies?.map((film, index) => {
        return props.blockView ? (
          <MoviesItemBlock
            key={index}
            film={film}
            filmsIds={filmsIds}
            saveFilm={saveFilm}
          />
        ) : (
          <MoviesItemList
            key={index}
            film={film}
            filmsIds={filmsIds}
            saveFilm={saveFilm}
          />
        );
      })}
    </MoviesLayout>
  );
};
