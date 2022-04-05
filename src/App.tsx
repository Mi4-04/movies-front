import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "@app/components/Header";
import { LoginPage } from "@app/Pages/Login";
import { Main } from "./Pages/Main";
import { AddPage } from "./Pages/AddPage";
import {
  IGenre,
  getGenreList,
  isValidFilmsIdAndFilms,
} from "@app/utils/movies";
import { ApolloProvider } from "@apollo/client";
import { useAppApolloClient } from "./config/apolloClient";
import { AuthProvider } from "./utils/user";
import { PrivateRoute } from "./components/PrivateRouter";

const App = () => {
  isValidFilmsIdAndFilms();

  const [userLogin, setUserLogin] = React.useState(
    localStorage.getItem("userLogin")
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
      .filter((genre) => genre.isClick)
      .map((genre) => genre.id);

    setGenresId(isClicked);
    localStorage.setItem("genres", JSON.stringify(genres));
  }, [genres]);

  const apolloClient = useAppApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <BrowserRouter>
          <div>
            <Header userLogin={userLogin as string} />

            <Switch>
              <PrivateRoute exact path="/">
                <Main
                  genres={genres}
                  setGenres={setGenres}
                  blockView={blockView}
                  setBlockView={setBlockView}
                />
              </PrivateRoute>
              <Route path="/login">
                <LoginPage setUserLogin={setUserLogin} />
              </Route>
              <PrivateRoute path="/add">
                <AddPage
                  genres={genres}
                  setGenres={setGenres}
                  blockView={blockView}
                  setBlockView={setBlockView}
                  genresId={genresId}
                />
              </PrivateRoute>
            </Switch>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
