"use client";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/appContext";
import Image from "next/image";
import styles from "../allthatsleft/allthatsleft.css";
import Link from "next/link";

const ukraine = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="landing-container">
      <div className="fake-navbar">
        <Link href="/" passHref>
          <img src="/img/CCEA99.png" alt="CCEA Logo" className="navbar-logo" />
        </Link>
      </div>
      <div className="landing-title">{store.fiscalFilms[1].title}</div>
      <div className="image-container">
        <Image
          height={100}
          width={100}
          layout="responsive"
          quality={100}
          className="fiscalFilms-image-ukraine"
          src={store.fiscalFilms[1].image}
          alt=""
        ></Image>
      </div>
      <div className="project-text">{store.fiscalFilms[1].logline}</div>
      <div className="first-section">
        <div className="basic-info">
          <span className="heading">Type: </span>
          <span>{store.fiscalFilms[1].type}</span>
          <br />
          <span className="heading">Status: </span>
          <span>{store.fiscalFilms[1].status}</span>
          <br />
          <span className="heading">Director:</span>
          <span>{store.fiscalFilms[1].director}</span>
          <br />
          <span className="heading">Producer: </span>
          <span>{store.fiscalFilms[1].producer}</span>
          <br />
          {store.fiscalFilms[1].execProducer && (
            <>
              <span className="heading">Executive Producer: </span>
              <span>{store.fiscalFilms[1].execProducer}</span>
            </>
          )}
        </div>
        <div>
          <a href="#landing-title-2" className="read-more">
            <span>Read more about this project</span>
          </a>
        </div>
      </div>
      <div className="wire-container">
        <p className="wire-info">
          We can accept credit card payments for donations up to $1,000 and ACH
          up to $10,000.
          <br />
          Please use a wire transfer for all donations ≥ $10,000.
          <br />
          Donations ≥ $100,000 will earn an Executive Producer credit.
        </p>
        <div className="wire-info-2">
          <p className="wire-info">
            ACCT: 583331023
            <br />
            ROUTING: 021000021
          </p>
          <p className="wire-info">
            Chase Bank
            <br />
            270 Park Ave.
            <br />
            New York, NY 10017
          </p>
        </div>
      </div>
      <div className="warning">
        <span className="wire-info" style={{ color: "red" }}>
          **Please be aware,{" "}
        </span>
        <span className="wire-info">
          an additional donation to the payment platform Zeffy will
          automatically populate at ~10%. To avoid making this contribution, go
          to the 'Summary' section, choose 'Other' from the dropdown, and enter
          $0.
        </span>
      </div>
      <div
        className="donation-form"
        id="donation-form"
        style={{ height: "1700px" }}
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
          src="https://www.zeffy.com/en-US/embed/donation-form/0c2c095a-2ce2-44d0-b409-fbcf18afa0ad"
          allowpaymentrequest="true"
          allowtransparency="true"
        ></iframe>
      </div>
      <div id="landing-title-2" className="landing-title-2">
        {store.fiscalFilms[1].title}
      </div>
      <br />
      <span className="heading">Synopsis:</span>
      <span className="project-text">{store.fiscalFilms[1].synopsis}</span>
      <br />
      <br />
      <span className="heading">Director:</span>
      <span className="project-text">{store.fiscalFilms[1].directorBio}</span>
      <br />
      <br />
      <span className="heading">Producer:</span>
      <span className="project-text">{store.fiscalFilms[1].producerBio}</span>
      <br />
      <br />

      {store.fiscalFilms[1].producer2Bio && (
        <>
          <span className="heading">Producer:</span>
          <span className="project-text">
            {store.fiscalFilms[1].producer2Bio}
          </span>
        </>
      )}
      <br />
      <div className="donate-first">
        <a href="#donation-form" className="donate-to">
          <p>Make a donation to </p>
          <p className="title-2">{store.fiscalFilms[1].title}</p>
        </a>
      </div>
    </div>
  );
};

export default ukraine;
