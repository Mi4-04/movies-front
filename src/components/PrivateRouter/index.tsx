import React, { useContext } from "react";

import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "@app/utils/user";

export const AuthRoute = ({ component: Component, ...args }: any) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...args}
      render={(props) =>
        !user ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
