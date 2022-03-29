import React from "react";
import { getMoviesList, IGenre, IMovies } from "@app/utils/movies";
import { MoviesItemBlock } from "./component/MoviesItemBlock";
import { MoviesLayout } from "./style";
import { MoviesItemList } from "./component/MoviesItemList";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_MOVIES } from "@app/gql/query";
import { ADD_FAV_MOVIES } from "@app/gql/mutation";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

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
  const [page, setPage] = React.useState(1);
  const [filmsIds, setFilmsIds] = React.useState<number[]>(
    JSON.parse(localStorage["filmsIds"])
  );

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

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
      page: page,
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

      <Stack spacing={2}>
        <Pagination count={10} page={page} onChange={handleChangePage} />
      </Stack>
    </MoviesLayout>
  );
};
