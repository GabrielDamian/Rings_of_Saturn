import Footer_1 from "@/components/Footer/Footer_1";
import Hero_2 from "@/components/Hero/Hero_2";
import Section_5 from "@/components/Section/Section_5";
import FadeInSection from "@/saturn/FadeInSection";

export default function Rooms({ src }) {
  return (
    <div>
      <FadeInSection>
        <Hero_2 title="KREST RELAXING HEIGHTS" subTitle="Camere" src={src} />
      </FadeInSection>
      <Section_5 src={src} />
      <FadeInSection>
        <Footer_1 />
      </FadeInSection>
    </div>
  );
}
