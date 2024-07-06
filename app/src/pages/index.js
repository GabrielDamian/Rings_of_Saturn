import React, { useContext } from "react";
import HeroSection from "@/components/Hero/Hero_1";
import FadeInSection from "@/saturn/FadeInSection";

const ExampleComponent = () => {
  return (
    <div style={{ marginTop: "10vh" }}>
      <img
        src="/images/image1.jpg"
        alt="magic"
        style={{ width: "300px", height: "300px", objectFit: "contain" }}
      />
      <img
        src="/images/image1.jpg"
        alt="magic"
        style={{ width: "300px", height: "300px", objectFit: "contain" }}
      />
      <img
        src="/images/image1.jpg"
        alt="magic"
        style={{ width: "300px", height: "300px", objectFit: "contain" }}
      />
      <img
        src="/images/image1.jpg"
        alt="magic"
        style={{ width: "300px", height: "300px", objectFit: "contain" }}
      />
      <img
        src="/images/image1.jpg"
        alt="magic"
        style={{ width: "300px", height: "300px", objectFit: "contain" }}
      />

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
