"use client";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/appContext";
import Image from "next/image";
import styles from "./donate.css";
import Link from "next/link";

const donate = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="donate-container">
      <div className="donate-title">{store.fiscalFilms[0].title}</div>
      <Image
        height={600}
        width={600}
        quality={100}
        className="donate-image"
        src={store.fiscalFilms[0].image}
        alt=""
      ></Image>

      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "1200px",
          paddingTop: "100%",
        }}
      >
        <iframe
          title="Donation form powered by Zeffy"
          style={{
            position: "absolute",
            border: "0",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            width: "100%",
            height: "100%",
          }}
          src="https://www.zeffy.com/en-US/embed/donation-form/0f0acc32-8176-4e42-8fcc-181879a6a219"
          allowpaymentrequest="true"
          allowTransparency="true"
        ></iframe>
      </div>
    </div>
  );
};

export default donate;
