import React, { useState } from "react";
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

  const [userLogin, setUserLogin] = useState(localStorage.getItem("userLogin"));
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLoggedIn") === "1"
  );

  const [genres, setGenres] = React.useState<IGenre[]>([]);

  const [view, setView] = React.useState<boolean>(false);

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
                view={view}
                setView={setView}
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
                view={view}
                setView={setView}
              />
            )}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
