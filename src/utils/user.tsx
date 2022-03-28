import React, { useState, useCallback, createContext, useEffect } from "react";
import jwtDecode from "jwt-decode";

interface AuthContextState {
  user: null;
  signIn: (data: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextState>({
  user: null,
  signIn: (data: string) => {},
  logout: () => {},
});

const AuthProvider = (props: any) => {
  const jwtToken = localStorage.getItem("accessToken");
  const [users, setUser] = useState(jwtToken);

  useEffect(() => {
    if (jwtToken) {
      const decodedToken = jwtDecode(jwtToken);

      if ((decodedToken as any).exp * 1000 < Date.now()) {
        localStorage.removeItem("accessToken");
        setUser(null);
      }
    }
  }, [jwtToken]);

  const signIn = useCallback(
    (token) => {
      localStorage.setItem("accessToken", token);
      setUser(token);
    },
    [setUser]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userLogin");
    setUser(null);
  }, [setUser]);

  return (
    <AuthContext.Provider value={{ user: users, logout, signIn }} {...props} />
  );
};

export { AuthProvider, AuthContext };
