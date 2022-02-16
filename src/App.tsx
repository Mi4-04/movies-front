import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "@app/components/Header/Header";
import { LoginPage } from "@app/Pages/Login";
import { FillUserStorage } from "@app/utils/users";

const App = () => {
  FillUserStorage();

  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLoggedIn") === "1"
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
