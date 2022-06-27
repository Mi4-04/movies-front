import React, { useState, useCallback, createContext, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useAppApolloClient } from "@app/config/apolloClient";
import { FC } from "react";

interface AuthContextState {
  token: string | null;
  signIn: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextState>({
  token: "",
  signIn: (token: string) => {},
  logout: () => {},
});

interface IAuthProvider {
  children: React.ReactNode | any;
}

const AuthProvider: FC<IAuthProvider> = ({ children }): any => {
  let jwtToken: string | null;
  if (typeof window !== "undefined") {
    jwtToken = localStorage.getItem("accessToken");
    const [accessToken, setAccessToken] = useState(jwtToken);

    const apolloClient = useAppApolloClient();

    useEffect(() => {
      if (jwtToken) {
        const decodedToken = jwtDecode(jwtToken);

        if ((decodedToken as any).exp * 1000 < Date.now()) {
          localStorage.removeItem("accessToken");
          setAccessToken(null);
        }
      }
    }, [jwtToken]);

    const signIn = useCallback(
      (token) => {
        if (typeof window !== "undefined")
          localStorage.setItem("accessToken", token);
        setAccessToken(token);
      },
      [setAccessToken]
    );

    const logout = useCallback(() => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userLogin");
      setAccessToken(null);
      apolloClient.resetStore();
    }, [setAccessToken]);

    return (
      <>
        <AuthContext.Provider value={{ token: accessToken, logout, signIn }}>
          {children}
        </AuthContext.Provider>
      </>
    );
  }
};

export { AuthProvider, AuthContext };
