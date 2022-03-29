import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "@app/utils/user";

export const PrivateRoute = ({ component, ...args }: any) => {
  const { token } = React.useContext(AuthContext);

  return (
    <Route
      {...args}
      render={(props) =>
        token ? React.createElement(component, props) : <Redirect to="/login" />
      }
    />
  );
};
