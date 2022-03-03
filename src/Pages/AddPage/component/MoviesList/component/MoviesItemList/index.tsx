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
import { IMovies } from "@app/utils/movies";

interface IMoviesItemList {
  film: IMovies;
}

export const MoviesItemList = ({ film }: IMoviesItemList) => {
  const { t } = useTranslation();

  const [filmsIds, setFilmsIds] = React.useState<number[]>(
    JSON.parse(localStorage["filmsIds"])
  );

  const saveFilm = (id: number): void => {
    let newfilmsIds = [...filmsIds, id];
    setFilmsIds(newfilmsIds);
    localStorage.setItem("filmsIds", JSON.stringify(newfilmsIds));
  };

  return (
    <MovieLayout>
      <MovieImg src={`${URL_POST}${film.poster_path}`} />
      <DescriptionLayout>
        <TitleLayout>
          <MovieTitle>{film.title}</MovieTitle>
        </TitleLayout>
        <MoviePopularity>
          {t(`film.popularity`)} {film.popularity}
        </MoviePopularity>
        <ReleaseDate>
          {t(`film.release_date`)} {film.release_date}
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
