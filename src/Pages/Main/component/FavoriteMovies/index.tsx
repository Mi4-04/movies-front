import React from "react";
import { getMovieDetails, IMovies } from "@app/utils/movies";
import { FavoriteMoviesItemBlock } from "./component/FavoriteMoviesItemBlock";
import { MoviesLayout } from "./style";
import { FavoriteMoviesItemList } from "./component/FavoriteMoviesItemLIst";
import { useMutation, useQuery } from "@apollo/client";
import { GET_MOVIE_DETAILS } from "@app/gql/query";
import { REMOVE_FAV_MOVIES, UPDATE_WATCHED } from "@app/gql/mutation";

interface IFavoriteMoviesProps {
  blockView: boolean;
}

export const FavoriteMovies = ({ blockView }: IFavoriteMoviesProps) => {
  let [movies, setMovies] = React.useState<IMovies[]>([]);
  const [filmsIds, setFilmsIds] = React.useState<number[]>(
    JSON.parse(localStorage["filmsIds"])
  );

  const [updateWatched] = useMutation(UPDATE_WATCHED);
  const [removeFavMovies] = useMutation(REMOVE_FAV_MOVIES);

  React.useEffect(() => {
    setMovies([]);
    filmsIds.map((id) => {
      getMovieDetails(id).then((res) => {
        setMovies((prev) => prev.concat({ ...res, ...{ watched: false } }));
      });
    });
  }, []);

  let movieId;

  let newFilmsIds = movies.filter((film) => (movieId = film.id));

  const { data, loading } = useQuery(GET_MOVIE_DETAILS, {
    variables: {
      getMovieDetailsId: movieId,
    },
  });

  React.useEffect(() => {
    if (!loading) {
      setFilmsIds(data.getMovieDetails);
    }

    localStorage.setItem("filmsIds", JSON.stringify(newFilmsIds));
  }, [data]);

  const handleWatched = (index: number) => {
    movies[index].watched = !movies[index].watched;
    setMovies([...movies]);
    let filmId;
    movies.filter((movie) => (filmId = movie.id));

    updateWatched({
      variables: {
        updateWatchedId: filmId,
      },
    });
  };

  const deleteFilm = (id: number) => {
    setMovies(movies.filter((film) => film.id !== id));

    removeFavMovies({
      variables: {
        removeFavMoviesId: id,
      },
    });
  };

  return (
    <MoviesLayout blockView={blockView}>
      {movies.map((film, index) => {
        return blockView ? (
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
