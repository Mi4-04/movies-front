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
import { IMovies } from "@app/utils/movies";

interface IFavoriteMoviesItemListProps {
  film: IMovies;
  handleWatched: (index: number) => void;
  deleteFilm: (id: number) => void;
  index: number;
}

export const FavoriteMoviesItemList = ({
  film,
  handleWatched,
  deleteFilm,
  index,
}: IFavoriteMoviesItemListProps) => {
  const { t } = useTranslation();

  return (
    <MovieLayout watched={film.watched}>
      <MovieImg src={`${URL_POST}${film.posterPath}`} />
      <DescriptionLayout>
        <TitleLayout>
          <MovieTitle>{film.title}</MovieTitle>
        </TitleLayout>
        <MoviePopularity>
          {t(`film.popularity`)} {film.popularity}
        </MoviePopularity>
        <ReleaseDate>
          {t(`film.releaseDate`)} {film.releaseDate}
        </ReleaseDate>
      </DescriptionLayout>
      <ButtonPadLayout>
        <IconButton
          onClick={() => handleWatched(index)}
          color="success"
          size="large"
        >
          <CheckBoxIcon />
        </IconButton>
        <IconButton onClick={() => deleteFilm(film.id)}>
          <DeleteIcon />
        </IconButton>
      </ButtonPadLayout>
    </MovieLayout>
  );
};
