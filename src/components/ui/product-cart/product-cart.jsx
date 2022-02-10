import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { ProductImage, Price, ContentWrapper, StyledPanel } from "./styles";
import OptionsList from "/src/components/ui/options-list/options-list";
import Tabs from "/src/components/ui/tabs/tabs";

function ProductCart({ product }) {
  const tabsList = [
    {
      title: "Описание",
      content: product.description
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications} />
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />
    }
  ];
  return (
    <StyledPanel>
      <ProductImage src={product.image} />
      <ContentWrapper>
        <Title as="h3" size={TitleSize.small} marginBottom={15}>
          {product.name}
        </Title>
        <Tabs tabsList={tabsList} />
        <Price>
          {product.price} руб. / {product.weight} гр.
        </Price>
      </ContentWrapper>
    </StyledPanel>
  );
}

export default ProductCart;
