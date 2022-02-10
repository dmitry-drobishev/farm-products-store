import React from "react";
import Button from "../../ui/button/button";
import { AppRoute } from "/src/const";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <Button minWidth={260} link={AppRoute.MAIN}>
        Главная
      </Button>
    )
  },
  {
    to: AppRoute.ORDER,
    button: (
      <Button minWidth={260} link={AppRoute.ORDER}>
        Купить билет
      </Button>
    )
  }
];

export default function Nav({ pageUrl }) {
  console.log({ pageUrl });
  return (
    <nav>
      {/* <Button link="/buy">Купить билет</Button> */}
      {buttons
        .filter((button) => button.to !== pageUrl)
        .map((button) => button.button)}
    </nav>
  );
}
