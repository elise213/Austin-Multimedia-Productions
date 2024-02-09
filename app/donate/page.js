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
        className="fiscalFilms-image"
        src={store.fiscalFilms[0].image}
        alt=""
      ></Image>
    </div>
  );
};

export default donate;
