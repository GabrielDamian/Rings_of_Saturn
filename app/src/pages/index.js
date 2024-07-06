import React, { useContext } from "react";
import HeroSection from "@/components/Hero/Hero_1";
import FadeInSection from "@/saturn/FadeInSection";

const ExampleComponent = () => {
  return (
    <div style={{ marginTop: "10vh" }}>
      <FadeInSection delay={2}>
        <HeroSection />
      </FadeInSection>
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
    </div>
  );
};

export default ExampleComponent;
