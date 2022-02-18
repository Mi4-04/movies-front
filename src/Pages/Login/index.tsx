import React from "react";
import { useHistory } from "react-router";
import { FieldInput } from "@app/Pages/Login/component/FieldInput";
import { Form } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { Button } from "@material-ui/core";
import { Password, ButtonCome, Container, AuthBlock } from "./style";
import { isValidUser } from "@app/utils/users";
import { useTranslation } from "react-i18next";
import logo from "@app/Pages/Login/assets/Logo.svg";

export const LoginPage = (props: { setIsLogged: (value: boolean) => void }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const required = (value: string): string => {
    return value ? "" : t("authorization.emptyFiled");
  };

  const onSubmit = (data: any) => {
    if (isValidUser(data.login, data.password)) {
      return { [FORM_ERROR]: t("authorization.incorrectData") };
    }

    localStorage.setItem("isLoggedIn", "1");
    localStorage.setItem("userLogin", data.login);
    props.setIsLogged(true);
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
