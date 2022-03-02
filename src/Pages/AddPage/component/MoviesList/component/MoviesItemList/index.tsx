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
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { URL_POST } from "@app/constant";

export const MoviesItemList = (props: {
  film: any;
  filmsIds: number[];
  saveFilm: (id: number) => void;
}) => {
  const { t } = useTranslation();

  return (
    <MovieLayout>
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
        <Button
          color={props.filmsIds.includes(props.film.id) ? "success" : "primary"}
          onClick={() => props.saveFilm(props.film.id)}
          size="small"
        >
          {t(`film.save`)}
        </Button>
      </ButtonPadLayout>
    </MovieLayout>
  );
};
