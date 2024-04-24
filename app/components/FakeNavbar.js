"use client";
import React, { useContext, useEffect } from "react";
import { Context } from "../context/appContext";
import Link from "next/link";
// import styles from "../styles/fakenavbar.css";

const FakeNavbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="fake-navbar">
        <Link href="/" passHref>
          <img src="/img/CCEA99.png" alt="CCEA Logo" className="navbar-logo" />
        </Link>
      </div>
    </>
  );
};

export default FakeNavbar;
