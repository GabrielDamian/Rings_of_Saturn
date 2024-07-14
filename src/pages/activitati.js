import Footer_1 from "@/components/Footer/Footer_1";
import Hero_2 from "@/components/Hero/Hero_2";
import Section_8 from "@/components/Section/Section_8";
import FadeInSection from "@/saturn/FadeInSection";

export default function Activtitati() {
  return (
    <>
      <FadeInSection>
        <Hero_2 title="Ce poți face în zona noastră" subTitle="Activități" />
      </FadeInSection>
      <Section_8 />
      <FadeInSection>
        <Footer_1 />
      </FadeInSection>
    </>
  );
}
