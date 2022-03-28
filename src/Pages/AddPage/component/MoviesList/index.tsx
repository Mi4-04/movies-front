import React from "react";
import { getMoviesList, IGenre, IMovies } from "@app/utils/movies";
import { DEFAULT_PAGE, DEFAULT_SORT_BY } from "@app/constant";
import { MoviesItemBlock } from "./component/MoviesItemBlock";
import { MoviesLayout } from "./style";
import { MoviesItemList } from "./component/MoviesItemList";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_MOVIES } from "@app/gql/query";
import { ADD_FAV_MOVIES } from "@app/gql/mutation";

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

  const [addFavMovies] = useMutation(ADD_FAV_MOVIES);

  const saveFilm = (id: number) => {
    const newfilmsIds = [...filmsIds, id];
    setFilmsIds(newfilmsIds);
    localStorage.setItem("filmsIds", JSON.stringify(newfilmsIds));
    addFavMovies({
      variables: {
        addFavMoviesId: id,
      },
    });
  };

  const { data, loading } = useQuery(GET_ALL_MOVIES, {
    variables: {
      genresIds: genresId,
      voteAverage: voteAverage,
      year: year,
    },
  });

  React.useEffect(() => {
    if (!loading) {
      setMovies(data.getAllMovies);
    }
  }, [data]);

  return (
    <MoviesLayout blockView={blockView}>
      {movies?.map((film, index) => {
        return blockView ? (
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
