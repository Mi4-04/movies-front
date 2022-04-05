import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "@app/utils/user";

export const PrivateRoute = ({ children, ...args }: any) => {
  const { token } = React.useContext(AuthContext);

  return (
    <Route
      {...args}
      render={() => (token ? children : <Redirect to="/login" />)}
    />
  );
};
