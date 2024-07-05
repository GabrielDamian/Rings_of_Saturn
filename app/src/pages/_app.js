// src/pages/_app.js

import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme"; // verifică că importul este corect

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
