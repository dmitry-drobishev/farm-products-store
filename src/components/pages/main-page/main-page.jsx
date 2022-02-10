import React from "react";
import FeaturesList from "/src/components/blocks/features-list/features-list";
import About from "/src/components/blocks/about/about";

export default function MainPage({ features }) {
  return (
    <>
      <About />
      <FeaturesList features={features} />
    </>
  );
}
