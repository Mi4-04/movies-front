import React from "react";
import { MainHeader, TextHeader, Title } from "./style";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AuthContext } from "@app/utils/user";

interface IHeaderProp {
  userLogin: string;
}

export const Header = ({ userLogin }: IHeaderProp) => {
  const { t } = useTranslation();

  const { user, logout } = React.useContext(AuthContext);

  return (
    <MainHeader>
      <Link to="/">
        <Title>{t(`header_title`)}</Title>
      </Link>
      {user ? (
        <div>
          <TextHeader>
            {" "}
            {t(`authorization.hello`)} {userLogin} &nbsp;
            <NavLink onClick={logout} exact to="/login">
              {t(`authorization.logout`)}
            </NavLink>
          </TextHeader>
        </div>
      ) : (
        <NavLink exact to="/login">
          <TextHeader> {t(`authorization.login`)}</TextHeader>
        </NavLink>
      )}
    </MainHeader>
  );
};
