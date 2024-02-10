"use client";
import React, { useContext, useEffect, useState } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import injectContext from "./context/appContext";
const inter = Inter({ subsets: ["latin"] });
import "font-awesome/css/font-awesome.min.css";
import { Context } from "./context/appContext";

function RootLayout({ children }) {
  const { store, actions } = useContext(Context);

  // useEffect(() => {
  //   actions.initializeScreenSize();
  // }, []);

  // useEffect(() => {
  //   const handleResize = actions.updateScreenSize;
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <html lang="en">
      <head>{/* ... */}</head>
      <body className={inter.className}>
        <Navbar isLargeScreen={store.isLargeScreen} />
        {children}
        <Footer isLargeScreen={store.isLargeScreen} />
      </body>
    </html>
  );
}

export default injectContext(RootLayout);
