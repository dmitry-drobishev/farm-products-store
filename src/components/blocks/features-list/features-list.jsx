import React from "react";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import { Features, StyledButton } from "./styles";
import Title from "/src/components/ui/title/title";
import { Ul, Li } from "/src/components/styled";
import { AppRoute } from "/src/const";

export default function FeaturesList({ features }) {
  return features && features.length ? (
    <Features>
      <Title as="h2" marginBottom={64}>
        Почему фермерские продукты лучше?
      </Title>
      <Ul $isGridList>
        {features.map((feature) => (
          <Li key={feature.id}>
            <FeatureCard {...feature} />
          </Li>
        ))}
      </Ul>
      <StyledButton link={AppRoute.ORDER}>Купить</StyledButton>
    </Features>
  ) : null;
}
