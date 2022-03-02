import React from "react";
import { IGenre } from "@app/utils/movies";
import { GenreItem } from "./GenreItem";
import { ContainerList } from "./style";

interface IGenreList {
  genres: IGenre[];
  setGenres: (value: IGenre[]) => void;
}

export const GenreList = ({ genres, setGenres }: IGenreList) => {
  const handleClicked = (index: number) => {
    genres[index].isClick = !genres[index].isClick;
    setGenres([...genres]);
  };

  return (
    <ContainerList>
      {genres?.map((genre, index) => {
        return (
          <GenreItem
            key={genre.id}
            index={index}
            genre={genre}
            handleClicked={handleClicked}
          />
        );
      })}
    </ContainerList>
  );
};
