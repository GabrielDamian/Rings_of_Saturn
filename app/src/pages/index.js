import React from "react";
import HeroSection from "@/components/Hero/Hero_1";
import FadeInSection from "@/saturn/FadeInSection";
import Section_1 from "@/components/Section/Section_1";
import Section_2 from "@/components/Section/Section_2";
import Section_3 from "@/components/Section/Section_3";
import Section_4 from "@/components/Section/Section_4";
import Footer_1 from "@/components/Footer/Footer_1";

const RootPage = () => {
  return (
    <div>
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
      <FadeInSection>
        <Section_1 />
      </FadeInSection>
      <FadeInSection>
        <Section_3 />
      </FadeInSection>
      <FadeInSection>
        <Section_2 />
      </FadeInSection>
      <FadeInSection>
        <Section_4 />
      </FadeInSection>
      <FadeInSection>
        <Footer_1 />
      </FadeInSection>
    </div>
  );
};

export default RootPage;
