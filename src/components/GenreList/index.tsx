import React from "react";
import { IGenre } from "@app/utils/movies";
import { GenreItem } from "./GenreItem";
import { ContainerList } from "./style";

export const GenreList = (props: {
  genres: IGenre[];
  setGenres: (value: IGenre[]) => void;
}) => {
  const [genresId, setGenresId] = React.useState<number[]>([]);

  React.useEffect(() => {
    setGenresId(
      props.genres
        .filter((w, index) => {
          return props.genres[index].isClick;
        })
        .map((genre) => {
          return genre.id;
        })
    );
  }, [props.genres]);

  const handleClicked = (index: number) => {
    props.genres[index].isClick = !props.genres[index].isClick;
    props.setGenres([...props.genres]);
  };

  localStorage.setItem("genres", JSON.stringify(props.genres));

  return (
    <ContainerList>
      {props.genres?.map((genre, index) => {
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
