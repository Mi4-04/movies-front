import React from "react";
import { GenreList } from "@app/components/GenreList";
import { useTranslation } from "react-i18next";
import {
  LinkLayout,
  HeaderGenres,
  HeaderMovies,
  LogOutWrapper,
  LogOutButton,
} from "./style";

import { FavoriteMovies } from "@app/containers/Main/component/FavoriteMovies";
import { ButtonPad } from "@app/components/ButtonPad";
import { MoviesContext } from "@app/utils/movies-context";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";

const MainPage = () => {
  const { t } = useTranslation();
  const { push } = useRouter();
  const client = useApolloClient();
  const { genres, setGenres, blockView, setBlockView } =
    React.useContext(MoviesContext);

  let user = null;
  if (typeof window !== "undefined") {
    user = localStorage.getItem("userLogin") || "";
  }

  const handleLogOut = () => {
    localStorage.clear();
    client.clearStore();
    push("/");
  };

  const handlePushAddPages = () => {
    push("/add");
  };

  return (
    <div>
      <LogOutWrapper>
        {t("authorization.hello")} {user}!
        <LogOutButton onClick={handleLogOut}>
          {t("authorization.logout")}
        </LogOutButton>
      </LogOutWrapper>
      <HeaderGenres>{t(`genres`)}</HeaderGenres>
      <GenreList genres={genres} setGenres={setGenres} />
      <HeaderMovies>{t(`movies`)}</HeaderMovies>
      <ButtonPad setBlockView={setBlockView} />

      <LinkLayout onClick={handlePushAddPages}>{t(`add`)}</LinkLayout>
      <FavoriteMovies blockView={blockView} />
    </div>
  );
};

export default MainPage;
