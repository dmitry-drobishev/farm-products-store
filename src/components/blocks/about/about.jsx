import React from "react";
import { TitleSize } from "../../ui/title/title";
import { AboutText, StyledAbout } from "./styles";

import Title from "/src/components/ui/title/title";

export default function About() {
  return (
    <StyledAbout>
      <Title size={TitleSize.big}>
        Магазин фермерских продуктов с доставкой
      </Title>
      <AboutText>
        Все продукты изготавливаются под заказ. Фермеры начинают готовить
        продукты за день до отправки заказа клиентам. Именно поэтому мы
        принимаем заказы заранее и доставляем продукты максимально свежими.
      </AboutText>
    </StyledAbout>
  );
}
