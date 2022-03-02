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

  const [genres, setGenres] = React.useState<IGenre[]>([]);

  const [blockAndListview, setBlockAndListview] =
    React.useState<boolean>(false);

  const [genresId, setGenresId] = React.useState<number[]>([]);

  React.useEffect(() => {
    setGenresId(
      genres
        .filter((w, index) => {
          return genres[index].isClick;
        })
        .map((genre) => {
          return genre.id;
        })
    );
  }, [genres]);

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

  localStorage.setItem("genres", JSON.stringify(genres));

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
                blockAndListview={blockAndListview}
                setBlockAndListview={setBlockAndListview}
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
                blockAndListview={blockAndListview}
                setBlockAndListview={setBlockAndListview}
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
