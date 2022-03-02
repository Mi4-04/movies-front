import { IGenre } from "@app/utils/movies";
import { Container, GenreItemContainer, GenreName } from "./style";

export const GenreItem = (props: {
  genre: IGenre;
  index: number;
  handleClicked: (index: number) => void;
}) => {
  return (
    <Container>
      <GenreItemContainer isChecked={props.genre.isClick}>
        <GenreName onClick={() => props.handleClicked(props.index)}>
          {props.genre.name}
        </GenreName>
      </GenreItemContainer>
    </Container>
  );
};
