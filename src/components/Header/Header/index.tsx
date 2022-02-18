import { MainHeader } from "./style";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Header = (props: {
  isLogged: boolean;
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
      {props.isLogged ? (
        <NavLink onClick={handleLogOut} exact to="/login">
          {t(`authorization.logout`)}
        </NavLink>
      ) : (
        <NavLink exact to="/login">
          {t(`authorization.login`)}
        </NavLink>
      )}
    </MainHeader>
  );
};
