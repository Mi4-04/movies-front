import React, { createContext, useEffect, FC } from "react";
import { getGenreList, IGenre } from "./movies";

interface MoviesContextState {
  genres: IGenre[];
  setGenres: (genres: IGenre[]) => void;
  blockView: boolean;
  setBlockView: (blockViev: boolean) => void;
  genresId: number[];
}

const MoviesContext = createContext<MoviesContextState>({
  genres: [],
  setGenres: (genres: IGenre[]) => {},
  blockView: false,
  setBlockView: (blockView: boolean) => {},
  genresId: [],
});

interface IMoviesProvider {
  children: React.ReactNode | any;
}

const MoviesProvide: FC<IMoviesProvider> = ({ children }): any => {
  const [blockView, setBlockView] = React.useState<boolean>(false);
  const [genres, setGenres] = React.useState<IGenre[]>([]);
  const [genresId, setGenresId] = React.useState<number[]>([]);

  React.useEffect(() => {
    getGenreList().then((results) => {
      setGenres(
        results.map((genre) => ({
          id: genre.id,
          isClick: false,
          name: genre.name,
        }))
      );
    });
  }, []);

  React.useEffect(() => {
    const isClicked = genres
      .filter((genre) => genre.isClick)
      .map((genre) => genre.id);

    setGenresId(isClicked);
    localStorage.setItem("genres", JSON.stringify(genres));
  }, [genres]);

  return (
    <>
      <MoviesContext.Provider
        value={{ genres, setGenres, blockView, setBlockView, genresId }}
      >
        {children}
      </MoviesContext.Provider>
    </>
  );
};

export { MoviesProvide, MoviesContext };
