import Footer_1 from "@/components/Footer/Footer_1";
import Hero_2 from "@/components/Hero/Hero_2";
import Section_7 from "@/components/Section/Section_7";
import FadeInSection from "@/saturn/FadeInSection";

export default function Galerie() {
  return (
    <>
      <FadeInSection>
        <Hero_2 title="Aruncă o privire la împrejurimile noastre" subTitle="Galerie" />
      </FadeInSection>
      <Section_7 />
      <FadeInSection>
        <Footer_1 />
      </FadeInSection>
    </>
  );
}
