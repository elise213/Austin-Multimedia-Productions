"use client";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../app/context/appContext";
import Image from "next/image";
import styles from "./landing.css";
import Link from "next/link";

const movieLanding = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="landing-container">
      <div className="landing-title">{store.fiscalFilms[0].title}</div>
      <Image
        height={600}
        width={600}
        quality={100}
        className="fiscalFilms-image"
        src={store.fiscalFilms[0].image}
        alt=""
      ></Image>
      <div className="first-section">
        <div className="basic-info">
          <span className="heading">Type: </span>
          <span>{store.fiscalFilms[0].type}</span>
          <br />
          <span className="heading">Status: </span>
          <span>{store.fiscalFilms[0].status}</span>
          <br />
          <span className="heading">Director:</span>
          <span>{store.fiscalFilms[0].director}</span>
          <br />
          <span className="heading">Producer: </span>
          <span>{store.fiscalFilms[0].producer}</span>
          <br />
          <span className="heading">Executive Producer: </span>
          <span>{store.fiscalFilms[0].execProducer}</span>
        </div>
        <div className="donate-first">
          <Link className="donate-to" href="/donate" passHref>
            Make a donation to
            <span className="title-2">{store.fiscalFilms[0].title}</span>
          </Link>
        </div>
      </div>

      <br />
      <br />
      <div>{store.fiscalFilms[0].logline}</div>
      <br />
      <span className="heading">Synopsis:</span>
      <span>{store.fiscalFilms[0].synopsis}</span>
      <br />
      <br />
      <span className="heading">Director Bio:</span>
      <span>{store.fiscalFilms[0].directorBio}</span>
      <br />
      <br />
      <span className="heading">Producer Bio:</span>
      <span>{store.fiscalFilms[0].producerBio}</span>
      <br />

      <div className="donate-to">
        <Link className="donate-to" href="/donate" passHref>
          Make a donation to
          <span className="title-2">{store.fiscalFilms[0].title}</span>
        </Link>
      </div>
    </div>
  );
};

export default movieLanding;
