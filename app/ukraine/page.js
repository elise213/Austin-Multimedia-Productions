"use client";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/appContext";
import Image from "next/image";
import styles from "../allthatsleft/allthatsleft.css";
import Link from "next/link";
import FakeNavbar from "../components/FakeNavbar";

const ukraine = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="landing-container">
      <FakeNavbar />
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
          Please use a wire transfer for donations of $10,000 or more.
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
      <div className="wire-container">
        <span className="wire-info">
          We can accept credit card payments up to $1,000 and ACH up to $10,000
          using the form below.
          <br />
          <br />
          <span
            style={{
              color: "red",
              textAlign: "left",
            }}
          >
            Warning!!
          </span>{" "}
          A donation to the payment platform Zeffy will automatically populate
          at ~9% of your donation to this project. To prevent this charge, enter
          the amount of your donation to this project, choose "other" from the
          dropdown menu of percentages in the Summary section, then enter the
          amount that you want to donate to Zeffy in the box labeled
          "Contribution".
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
