import React from "react";
// import styles from "./styles/404.Module.css";
import styles from "./styles/NotFound.module.css";
import FadeInSection from "@/saturn/FadeInSection";
import Footer_1 from "@/components/Footer/Footer_1";

const Custom404 = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.core}>
          <h1>Pagina nu a fost găsită</h1>
          <p>Ne pare rău, dar pagina pe care o căutați nu există.</p>
        </div>
      </div>
      <FadeInSection>
        <Footer_1 />
      </FadeInSection>
    </>
  );
};

export default Custom404;
