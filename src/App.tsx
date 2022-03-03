import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Header } from "@app/components/Header";
import { LoginPage } from "@app/Pages/Login";
import { FillUserStorage } from "@app/utils/users";
import { Main } from "./Pages/Main";
import { AddPage } from "./Pages/AddPage";
import {
  IGenre,
  getGenreList,
  isValidFilmsIdAndFilms,
} from "@app/utils/movies";

const App = () => {
  FillUserStorage();

  isValidFilmsIdAndFilms();

  const [userLogin, setUserLogin] = React.useState(
    localStorage.getItem("userLogin")
  );
  const [isLogged, setIsLogged] = React.useState(
    localStorage.getItem("isLoggedIn") === "1"
  );

  const [blockView, setBlockView] = React.useState<boolean>(false);
  const [genres, setGenres] = React.useState<IGenre[]>([]);
  const [genresId, setGenresId] = React.useState<number[]>([]);

  React.useEffect(() => {
    getGenreList().then((results) => {
      setGenres(
        results.map((genre) => ({
          id: genre.id,
          isClick: false,
          name: genre.name,
        }))
      );
    });
  }, []);

  React.useEffect(() => {
    const isClicked = genres
      .filter((genre) => {
        return genre.isClick;
      })
      .map((genre) => {
        return genre.id;
      });

    setGenresId(isClicked);
    localStorage.setItem("genres", JSON.stringify(genres));
  }, [genres]);

  return (
    <BrowserRouter>
      <div>
        <Header
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          userLogin={userLogin as string}
        />

        <Switch>
          <Route exact path="/">
            {!isLogged ? (
              <Redirect to="/login" />
            ) : (
              <Main
                genres={genres}
                setGenres={setGenres}
                blockView={blockView}
                setBlockView={setBlockView}
              />
            )}
          </Route>
          <Route exact path="/login">
            <LoginPage setIsLogged={setIsLogged} setUserLogin={setUserLogin} />
          </Route>
          <Route path="/add">
            {!isLogged ? (
              <Redirect to="/login" />
            ) : (
              <AddPage
                genres={genres}
                setGenres={setGenres}
                blockView={blockView}
                setBlockView={setBlockView}
                genresId={genresId}
              />
            )}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
