import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../ThemeContext";
import HeroSection from "@/components/Hero/Hero_1";
import FadeInSection from "@/saturn/FadeInSection";

const ExampleContainer = styled.div`
  border: 2px solid ${(props) => props.theme.primaryColor};
  transform: translateY(-100px);
  z-index: 1;
`;

const ExampleComponent = () => {
  return (
    <ExampleContainer>
      <p style={{ height: "130vh", border: "2px solid blue" }}>test</p>
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
      s
    </ExampleContainer>
  );
};

export default ExampleComponent;
