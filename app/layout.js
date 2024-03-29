"use client";
import React, { useContext, useEffect, useState } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import injectContext from "./context/appContext";
const inter = Inter({ subsets: ["latin"] });
import "font-awesome/css/font-awesome.min.css";
import { useApplyBodyClass } from "./hooks/useApplyBodyClass";

function RootLayout({ children }) {
  useApplyBodyClass();

  return (
    <html lang="en">
      <head>{/* ... */}</head>
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

export default injectContext(RootLayout);
