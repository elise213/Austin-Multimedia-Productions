"use client";
import React, { useContext, useEffect, useState } from "react";
import "./globals.css";
// import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import injectContext from "./context/appContext";

const inter = Inter({ subsets: ["latin"] });
import "font-awesome/css/font-awesome.min.css";
import { useApplyBodyClass } from "./hooks/useApplyBodyClass";

function RootLayout({ children }) {
  useApplyBodyClass();

  return (
    <html lang="en">
      {/* <Head> */}
      <head>
        <title>CCE Arts</title>
        <meta property="og:url" content="https://ccearts.org" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Explore CCEA" />
        <meta
          property="og:description"
          content="The Center for Cinematic and Experimental Arts."
        />
        <meta
          property="og:image"
          content="https://ccearts.org/img/CCEARETREATSMALLER.png"
        />
        <meta property="og:image:alt" content="CCEA Activities Overview" />
      </head>
      {/* </Head> */}

      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

export default injectContext(RootLayout);
