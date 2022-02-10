import React from "react";
import Footer from "/src/components/layout/footer/footer";
import Header from "/src/components/layout/header/header";
import { Main } from "./styles";

// import Img1 from "/src/assets/feature-card4.png";
// console.log(Img1);

export default function PageWrapper({ children, pageUrl }) {
  return (
    <>
      <Header pageUrl={pageUrl} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
