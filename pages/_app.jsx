import React from "react";

import "react-responsive-modal/styles.css";
import "../styles/main.scss";
import "../styles/notice_system.scss";
import "../styles/Layout.scss";
import "../styles/swiperSlide.scss";

import Header from "../components/Header";
import Layout from "../components/Layout";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="MainWrap">
      <Script src="//cdn.jsdelivr.net/npm/sweetalert2@11" />
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossOrigin="anonymous"
      />

      <Script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"
      />
      <Script
        type="text/javascript"
        src="https://unpkg.com/gsap@3/dist/ScrollToPlugin.min.js"
      />

      <Script
        type="text/javascript"
        src=" https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"
      />

      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit-icons.min.js" />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Node93</title>
      </Head>

      <Header>
        <p className="text-white text-2xl font-black flex justify-center items-end pb-5 h-[100px]">
          NODE.93
        </p>
      </Header>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
