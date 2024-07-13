import Footer_1 from "@/components/Footer/Footer_1";
import Hero_2 from "@/components/Hero/Hero_2";
import Section_6 from "@/components/Section/Section_6";
import FadeInSection from "@/saturn/FadeInSection";

export default function Contact() {
  return (
    <div>
      <FadeInSection>
        <Hero_2 title="Ia legătura cu noi" subTitle="Contact" />
      </FadeInSection>
      <FadeInSection>
        <Section_6 />
      </FadeInSection>
      <FadeInSection>
        <Footer_1 />
      </FadeInSection>
    </div>
  );
}
