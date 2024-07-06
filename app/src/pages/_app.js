// src/pages/_app.js

import React, { useState, useEffect } from "react";
import BurgerMenu from "../components/Menu/Menu_1/index";
import { theme, flattenObject } from "../theme";
import "../globals.css";
import LoadingScreen from "../saturn/LoadingScreen/LoadingScreen";

const MyApp = ({ Component, pageProps }) => {
  const flattenTheme = flattenObject(theme);

  return (
    <div style={{ ...flattenTheme }}>
      <BurgerMenu />
      <LoadingScreen>
        <Component {...pageProps} />
      </LoadingScreen>
    </div>
  );
};

export default MyApp;
