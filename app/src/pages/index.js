import React from "react";
import HeroSection from "@/components/Hero/Hero_1";
import FadeInSection from "@/saturn/FadeInSection";
import Section_1 from "@/components/Section/Section_1";

const ExampleComponent = () => {
  return (
    <div>
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
      <FadeInSection>
        <Section_1 />
      </FadeInSection>
    </div>
  );
};

export default ExampleComponent;
