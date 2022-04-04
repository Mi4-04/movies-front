import React from "react";
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
import Button from "@mui/material/Button";
import { IMovieItem } from "@app/types";

export const MoviesItemList = ({ film, filmsIds, saveFilm }: IMovieItem) => {
  const { t } = useTranslation();

  return (
    <MovieLayout>
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
        <Button
          color={filmsIds.includes(film.id) ? "success" : "primary"}
          onClick={() => saveFilm(film.id)}
          size="small"
        >
          {t(`film.save`)}
        </Button>
      </ButtonPadLayout>
    </MovieLayout>
  );
};
