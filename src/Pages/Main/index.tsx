import React from "react";
import { GenreList } from "@app/components/GenreList";
import { useTranslation } from "react-i18next";
import { ButtonLayout, HeaderGenres, HeaderMovies } from "./style";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { IGenre } from "@app/utils/movies";
import { FavoriteMovies } from "@app/Pages/Main/component/FavoriteMovies";
import { ButtonPad } from "@app/components/ButtonPad";

export const Main = (props: {
  genres: IGenre[];
  setGenres: (value: any) => void;
  view: boolean;
  setView: (value: boolean) => void;
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <HeaderGenres>{t(`genres`)}</HeaderGenres>
      <GenreList genres={props.genres} setGenres={props.setGenres} />
      <HeaderMovies>{t(`movies`)}</HeaderMovies>
      <ButtonPad setView={props.setView} />

      <ButtonLayout>
        <Link to="/add">
          <Button variant="outlined" color="inherit" size="large">
            {t(`add`)}
          </Button>
        </Link>
      </ButtonLayout>
      <FavoriteMovies view={props.view} />
    </div>
  );
};
