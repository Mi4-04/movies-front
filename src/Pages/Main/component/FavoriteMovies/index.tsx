import React from "react";
import { getMovieDetails } from "@app/utils/movies";
import { FavoriteMoviesItemBlock } from "./component/FavoriteMoviesItemBlock";
import { MoviesLayout } from "./style";
import { FavoriteMoviesItemList } from "./component/FavoriteMoviesItemLIst";

export const FavoriteMovies = (props: { blockAndListview: boolean }) => {
  let [movies, setMovies] = React.useState<any[]>([]);
  const [filmsIds, setFilmsIds] = React.useState<number[]>(
    JSON.parse(localStorage["filmsIds"])
  );

  React.useEffect(() => {
    setMovies([]);
    filmsIds.map((id) => {
      getMovieDetails(id).then((res) => {
        setMovies((prev) => prev.concat({ ...res, ...{ watched: false } }));
      });
    });
  }, []);

  React.useEffect(() => {
    let newFilmsIds = movies.map((film) => film.id);
    localStorage.setItem("filmsIds", JSON.stringify(newFilmsIds));
    setFilmsIds(newFilmsIds);
  }, [movies]);

  const handleWatched = (index: number) => {
    movies[index].watched = !movies[index].watched;
    setMovies([...movies]);
  };

  const deleteFilm = (id: number) => {
    setMovies(movies.filter((film) => film.id !== id));
  };

  return (
    <MoviesLayout blockAndListview={props.blockAndListview}>
      {movies.map((film, index) => {
        return props.blockAndListview ? (
          <FavoriteMoviesItemBlock
            key={index}
            film={film}
            index={index}
            handleWatched={handleWatched}
            deleteFilm={deleteFilm}
          />
        ) : (
          <FavoriteMoviesItemList
            key={index}
            film={film}
            index={index}
            handleWatched={handleWatched}
            deleteFilm={deleteFilm}
          />
        );
      })}
    </MoviesLayout>
  );
};
