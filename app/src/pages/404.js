import React from "react";
// import styles from "./styles/404.Module.css";
import styles from "./styles/NotFound.module.css";

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.core}>
        <h1>Pagina nu a fost găsită</h1>
        <p>Ne pare rău, dar pagina pe care o căutați nu există.</p>
      </div>
    </div>
  );
};

export default Custom404;
