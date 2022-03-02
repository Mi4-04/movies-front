import React from "react";
import { GenreList } from "@app/components/GenreList";
import { useTranslation } from "react-i18next";
import { ButtonLayout, HeaderGenres, HeaderMovies } from "./style";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { IGenre } from "@app/utils/movies";
import { FavoriteMovies } from "@app/Pages/Main/component/FavoriteMovies";
import { ButtonPad } from "@app/components/ButtonPad";

interface IMainProps {
  genres: IGenre[];
  setGenres: (value: any) => void;
  blockAndListview: boolean;
  setBlockAndListview: (value: boolean) => void;
}

export const Main = ({
  genres,
  setGenres,
  blockAndListview,
  setBlockAndListview,
}: IMainProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <HeaderGenres>{t(`genres`)}</HeaderGenres>
      <GenreList genres={genres} setGenres={setGenres} />
      <HeaderMovies>{t(`movies`)}</HeaderMovies>
      <ButtonPad setBlockAndListview={setBlockAndListview} />

      <ButtonLayout>
        <Link to="/add">
          <Button variant="outlined" color="inherit" size="large">
            {t(`add`)}
          </Button>
        </Link>
      </ButtonLayout>
      <FavoriteMovies blockAndListview={blockAndListview} />
    </div>
  );
};
