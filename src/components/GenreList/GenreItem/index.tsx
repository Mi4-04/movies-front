import { IGenre } from "@app/utils/movies";
import { Container, GenreItemContainer, GenreName } from "./style";

interface IGenreItem {
  genre: IGenre;
  handleClicked: (index: number) => void;
  index: number;
}

export const GenreItem = ({ genre, handleClicked, index }: IGenreItem) => {
  return (
    <Container>
      <GenreItemContainer isChecked={genre.isClick}>
        <GenreName onClick={() => handleClicked(index)}>{genre.name}</GenreName>
      </GenreItemContainer>
    </Container>
  );
};
