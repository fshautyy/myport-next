import React from "react";
import Head from "next/head";
import AppData from "@data/app.json";
import LogoIcon from "../../public/img/icons/favicon.ico";
import '../styles/scss/style.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          {/* seo begin */}
          <link rel="icon" href="/img/icons/favicon.ico"  />
          <title>{AppData.settings.siteName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* seo end */}        
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
