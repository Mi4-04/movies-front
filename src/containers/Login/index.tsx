import React from "react";

import { FieldInput } from "@app/containers/Login/component/FieldInput";
import { Form } from "react-final-form";
import { Button } from "@material-ui/core";
import { Password, ButtonCome, Container, AuthBlock } from "./style";
import { useTranslation } from "react-i18next";
import logo from "@app/containers/Login/assets/Logo.svg";
import { useMutation } from "@apollo/client";
import { AUTH_USER } from "@app/gql/mutation";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthContext } from "@app/utils/user";
import { useRouter } from "next/router";
import { FORM_ERROR } from "final-form";
import Image from "next/image";

interface ILogin {
  login: string;
  password: string;
}

export const LoginPage = () => {
  const { t } = useTranslation();
  const { replace } = useRouter();
  const required = (value: string): string => {
    return value ? "" : t("authorization.emptyFiled");
  };

  const [loginUser, { loading }] = useMutation(AUTH_USER, {
    onError: (error) => error,
  });

  if (loading) {
    return <CircularProgress color="success" />;
  }

  const onSubmit = async ({ login, password }: ILogin) => {
    const auth = await loginUser({
      variables: {
        login,
        password,
      },
      onCompleted: (data: any) => {
        localStorage.setItem("accessToken", data.signIn.accessToken);
        localStorage.setItem("userLogin", login);
      },
    });

    return auth ? replace("/main") : { [FORM_ERROR]: "Ошибка" };
  };

  return (
    <Container>
      <Image src={logo} width={100} height={150} />

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
