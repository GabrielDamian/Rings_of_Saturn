// src/pages/_app.js

import React from "react";
import { ThemeProvider } from "styled-components";
import BurgerMenu from "../components/Menu/Menu_1/index"; // Importăm componenta pentru meniu

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <BurgerMenu />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
