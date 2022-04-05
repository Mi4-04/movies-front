import React from "react";
import { IMovies } from "@app/utils/movies";
import { FavoriteMoviesItem } from "./component/FavoriteMoviesItem";
import { MoviesLayout } from "./style";
import { useMutation, useQuery } from "@apollo/client";
import { GET_FAV_MOVIES } from "@app/gql/query";
import { REMOVE_FAV_MOVIES } from "@app/gql/mutation";

interface IFavoriteMoviesProps {
  blockView: boolean;
}

export const FavoriteMovies = ({ blockView }: IFavoriteMoviesProps) => {
  const [removeFavMovies] = useMutation(REMOVE_FAV_MOVIES);

  const [filmsIds, setFilmsIds] = React.useState<number[]>(
    JSON.parse(localStorage["filmsIds"])
  );
  let [movies, setMovies] = React.useState<IMovies[]>([]);
  const { data, loading } = useQuery(GET_FAV_MOVIES, {
    pollInterval: 500,
  });

  React.useEffect(() => {
    if (!loading) {
      setMovies(data.getFavMovies);
    }
  }, [data]);

  React.useEffect(() => {
    let newFilmsIds = movies.map((film) => film.id);
    localStorage.setItem("filmsIds", JSON.stringify(newFilmsIds));

    setFilmsIds(newFilmsIds);
  }, [movies]);

  const deleteFilm = (id: number) => {
    removeFavMovies({
      variables: {
        removeFavMoviesId: id,
      },
    });

    localStorage.getItem(String(id)) && localStorage.removeItem(String(id));
    setMovies(movies.filter((film) => film.id !== id));
  };

  return (
    <MoviesLayout blockView={blockView}>
      {movies.map((film) => {
        return (
          <FavoriteMoviesItem
            key={film.id}
            film={film}
            deleteFilm={deleteFilm}
          />
        );
      })}
    </MoviesLayout>
  );
};
