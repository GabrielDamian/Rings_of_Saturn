// src/pages/_app.js

import React, { useState, useEffect } from "react";
import BurgerMenu from "../components/Menu/Menu_1/index";
import { theme, flattenObject } from "../theme";
import "../globals.css";
import LoadingScreen from "../saturn/LoadingScreen/LoadingScreen";
import Head from "next/head";
import axios from "axios";

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

const MyApp = ({ Component, pageProps }) => {
  const flattenTheme = flattenObject(theme);
  console.log("flattenTheme:", flattenTheme);

  const [src, setSrc] = useState(null);

  useEffect(() => {
    console.log("_app:", src);
  }, [src]);

  const fetchSrc = async () => {
    let websiteIndex = extractSubstringFromURL();
    console.log("Extracted website url:", websiteIndex);

    websiteIndex = 1; //DEV MODE
    try {
      let res = await axios.get(`http://localhost:3000/api/site?id=${websiteIndex}`);
      setSrc(res.data.data[0]);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchSrc();
  }, []);

  const customProps = {
    ...pageProps,
    src,
  };

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
        <BurgerMenu src={src} />
        <LoadingScreen src={src}>
          <Component {...customProps} />
        </LoadingScreen>
      </div>
    </>
  );
};

export default MyApp;
