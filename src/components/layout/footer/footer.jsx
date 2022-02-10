import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledFooter, FooterData } from "./styles";

export default function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <FooterData>Создано 2021</FooterData>
    </StyledFooter>
  );
}
