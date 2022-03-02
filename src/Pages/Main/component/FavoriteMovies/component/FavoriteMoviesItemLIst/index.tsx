import {
  ButtonPadLayout,
  DescriptionLayout,
  MovieImg,
  MovieLayout,
  MoviePopularity,
  MovieTitle,
  ReleaseDate,
  TitleLayout,
} from "./style";
import { URL_POST } from "@app/constant";
import { useTranslation } from "react-i18next";
import IconButton from "@mui/material/IconButton";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteIcon from "@mui/icons-material/Delete";

export const FavoriteMoviesItemList = (props: {
  film: any;
  handleWatched: (index: number) => void;
  deleteFilm: (id: number) => void;
  index: number;
}) => {
  const { t } = useTranslation();

  return (
    <MovieLayout watched={props.film.watched}>
      <MovieImg src={`${URL_POST}${props.film.poster_path}`} />
      <DescriptionLayout>
        <TitleLayout>
          <MovieTitle>{props.film.title}</MovieTitle>
        </TitleLayout>
        <MoviePopularity>
          {t(`film.popularity`)} {props.film.popularity}
        </MoviePopularity>
        <ReleaseDate>
          {t(`film.release_date`)} {props.film.release_date}
        </ReleaseDate>
      </DescriptionLayout>
      <ButtonPadLayout>
        <IconButton
          onClick={() => props.handleWatched(props.index)}
          color="success"
          size="large"
        >
          <CheckBoxIcon />
        </IconButton>
        <IconButton onClick={() => props.deleteFilm(props.film.id)}>
          <DeleteIcon />
        </IconButton>
      </ButtonPadLayout>
    </MovieLayout>
  );
};
