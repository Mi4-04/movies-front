import { MainHeader, TextHeader, Title } from "./style";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Header = (props: {
  isLogged: boolean;
  userLogin: string;
  setIsLogged: (value: any) => void;
}) => {
  const { t } = useTranslation();

  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userLogin");
    props.setIsLogged(false);
  };

  return (
    <MainHeader>
      <Link to="/">
        <Title>{t(`header_title`)}</Title>
      </Link>
      {props.isLogged ? (
        <div>
          <TextHeader>
            {t(`authorization.hello`)} {props.userLogin} &nbsp;
            <NavLink onClick={handleLogOut} exact to="/login">
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
