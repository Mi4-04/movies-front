import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { LoginPage } from "./Pages/Login";
import { FillUserStorage } from "./utils/users";

const App = () => {
  FillUserStorage();

  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  return (
    <BrowserRouter>
      <div>
        <Header isLogged={isLogged} setIsLogged={setIsLogged} />

        <Switch>
          <Route exact path="/login">
            <LoginPage setIsLogged={setIsLogged} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
