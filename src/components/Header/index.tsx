import React from "react";
import { MainHeader, Title } from "./style";

import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Header = () => {
  const { t } = useTranslation();

  const { push } = useRouter();

  return (
    <MainHeader>
      <Title onClick={() => push("/main")}>{t(`header_title`)}</Title>
    </MainHeader>
  );
};

export default Header;
