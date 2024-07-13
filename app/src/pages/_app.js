// src/pages/_app.js

import React, { useState, useEffect } from "react";
import BurgerMenu from "../components/Menu/Menu_1/index";
import { theme, flattenObject } from "../theme";
import "../globals.css";
import LoadingScreen from "../saturn/LoadingScreen/LoadingScreen";
import Head from "next/head";
import axios from "axios";

const MyApp = ({ Component, pageProps }) => {
  const flattenTheme = flattenObject(theme);
  console.log("flattenTheme:", flattenTheme);

  function extractSubstringFromURL() {
    var url = window.location.href;

    var startDelimiter = "magnus-";
    var endDelimiter = "-magic";

    var startIndex = url.indexOf(startDelimiter);
    if (startIndex === -1) {
      return null;
    }

    startIndex += startDelimiter.length;

    var endIndex = url.indexOf(endDelimiter, startIndex);
    if (endIndex === -1) {
      return null;
    }

    var result = url.substring(startIndex, endIndex);

    return result;
  }

  const fetchSrc = async () => {
    let websiteIndex = extractSubstringFromURL();
    console.log("websiteIndex result:", websiteIndex);
    websiteIndex = 1; //DEV MODE
    try {
      let res = await axios.get(`http://localhost:3000/api/site?id=${websiteIndex}`);
      console.log("_app:", res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    fetchSrc();
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Baskervville+SC&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Baskervville+SC&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
        />
      </Head>
      <div style={{ ...flattenTheme }}>
        <BurgerMenu />
        <LoadingScreen>
          <Component {...pageProps} />
        </LoadingScreen>
      </div>
    </>
  );
};

export default MyApp;
