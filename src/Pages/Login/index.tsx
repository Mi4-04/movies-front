import React from "react";
import { useHistory } from "react-router";
import { FieldInput } from "@app/Pages/Login/component/FieldInput";
import { Form } from "react-final-form";
import { Button } from "@material-ui/core";
import { Password, ButtonCome, Container, AuthBlock } from "./style";
import { useTranslation } from "react-i18next";
import logo from "@app/Pages/Login/assets/Logo.svg";
import { useMutation } from "@apollo/client";
import { AUTH_USER } from "@app/gql/mutation";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthContext } from "@app/utils/user";

interface ILogin {
  login: string;
  password: string;
}

export const LoginPage = (props: { setUserLogin: (value: string) => void }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const required = (value: string): string => {
    return value ? "" : t("authorization.emptyFiled");
  };

  const { signIn } = React.useContext(AuthContext);

  const [loginUser, { loading }] = useMutation(AUTH_USER);

  if (loading) {
    return <CircularProgress color="success" />;
  }

  const onSubmit = ({ login, password }: ILogin) => {
    loginUser({
      variables: {
        login,
        password,
      },
      onCompleted: (data: any) => {
        signIn(data.signIn.accessToken);
      },
    });

    localStorage.setItem("userLogin", login);

    props.setUserLogin(login);

    history.push("/");
  };

  return (
    <Container>
      <img src={logo} style={{ width: "100px", height: "150px" }} />

      <AuthBlock>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitError }) => (
            <form onSubmit={handleSubmit}>
              <FieldInput name={"login"} validate={required} />

              <Password>
                <FieldInput name={"password"} validate={required} />
              </Password>

              <div>
                {submitError && <div className="error">{submitError}</div>}
                <ButtonCome>
                  <Button variant="outlined" type="submit">
                    {t("authorization.logIn")}
                  </Button>
                </ButtonCome>
              </div>
            </form>
          )}
        />
      </AuthBlock>
    </Container>
  );
};
