import React from "react";
import { TitleSize } from "../title/title";
import {
  Feature,
  FeatureHeader,
  FeatureImg,
  FeatureOwner,
  FeatureText
} from "./styles";
import Title from "/src/components/ui/title/title";

function FeatureCard({ title, owner, isNegative, image, about }) {
  return (
    <Feature isNegative={isNegative}>
      <FeatureHeader>
        <FeatureImg src={image} alt="Еда намного вкуснее" />
        <div>
          <FeatureOwner isNegative={isNegative}>{owner}</FeatureOwner>
          <Title size={TitleSize.extra_small}>{title}</Title>
        </div>
      </FeatureHeader>
      <FeatureText dangerouslySetInnerHTML={{ __html: about }} />
    </Feature>
  );
}

export default FeatureCard;
