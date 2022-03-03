import React from "react";
import { GenreList } from "@app/components/GenreList";
import { useTranslation } from "react-i18next";
import { LinkLayout, HeaderGenres, HeaderMovies } from "./style";
import { Link } from "react-router-dom";

import { IGenre } from "@app/utils/movies";
import { FavoriteMovies } from "@app/Pages/Main/component/FavoriteMovies";
import { ButtonPad } from "@app/components/ButtonPad";

interface IMainProps {
  genres: IGenre[];
  setGenres: (value: any) => void;
  blockView: boolean;
  setBlockView: (value: boolean) => void;
}

export const Main = ({
  genres,
  setGenres,
  blockView,
  setBlockView,
}: IMainProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <HeaderGenres>{t(`genres`)}</HeaderGenres>
      <GenreList genres={genres} setGenres={setGenres} />
      <HeaderMovies>{t(`movies`)}</HeaderMovies>
      <ButtonPad setBlockView={setBlockView} />

      <LinkLayout>
        <Link to="/add">{t(`add`)}</Link>
      </LinkLayout>
      <FavoriteMovies blockView={blockView} />
    </div>
  );
};
