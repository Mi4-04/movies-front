import { MainHeader, TextHeader, Title } from "./style";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface IHeaderProp {
  isLogged: boolean;
  setIsLogged: (value: any) => void;
  userLogin: string;
}

export const Header = ({ isLogged, setIsLogged, userLogin }: IHeaderProp) => {
  const { t } = useTranslation();

  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userLogin");
    setIsLogged(false);
  };

  return (
    <MainHeader>
      <Link to="/">
        <Title>{t(`header_title`)}</Title>
      </Link>
      {isLogged ? (
        <div>
          <TextHeader>
            {" "}
            {t(`authorization.hello`)} {userLogin} &nbsp;
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
