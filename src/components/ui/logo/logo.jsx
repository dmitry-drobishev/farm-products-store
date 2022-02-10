import React from "react";

import { ReactComponent as LogoImg } from "/src/assets/logo.svg";
import { StyledLogo, LogoText } from "./styles";

export default function Logo() {
  return (
    <StyledLogo href="/">
      <LogoImg />
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogo>
  );
}
