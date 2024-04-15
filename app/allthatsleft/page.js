"use client";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/appContext";
import Image from "next/image";
import styles from "./allthatsleft.css";
import Link from "next/link";

const allthatsleft = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="landing-container">
      <div className="landing-title">{store.fiscalFilms[0].title}</div>
      <Image
        height={200}
        width={1000}
        quality={100}
        className="fiscalFilms-image"
        src={store.fiscalFilms[0].image}
        alt=""
      ></Image>
      <div className="project-text">{store.fiscalFilms[0].logline}</div>
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
        <div>
          <a href="#landing-title-2" className="read-more">
            <span>Read more about this project</span>
          </a>
        </div>
      </div>
      <div className="wire-container">
        <p className="wire-info">
          We can accept credit card payments for donations up to $1,000.
          and ACH up to $10,000.
          <br/>
          Please use a wire transfer for all donations ≥ $10,000

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
        <p className="wire-info">
          **A donation to Zeffy will automatically populate at 10%. To avoid making an unnecessary contribution to the platform, go to the "Summary" section, choose 'Other' from the dropdown menu, and then enter $0.  
          <br />
          <br />
          Donations ≥ $100,000 will earn an Executive Producer credit!
          </p>
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
          src="https://www.zeffy.com/en-US/embed/donation-form/0f0acc32-8176-4e42-8fcc-181879a6a219"
          allowpaymentrequest="true"
          allowtransparency="true"
        ></iframe>
      </div>
      <div id="landing-title-2" className="landing-title-2">
        {store.fiscalFilms[0].title}
      </div>
      <br />
      <span className="heading">Synopsis:</span>
      <span className="project-text">{store.fiscalFilms[0].synopsis}</span>
      <br />
      <br />
      <span className="heading">Director:</span>
      <span className="project-text">{store.fiscalFilms[0].directorBio}</span>
      <br />
      <br />
      <span className="heading">Producer:</span>
      <span className="project-text">{store.fiscalFilms[0].producerBio}</span>
      <br />
      <br />
      <span className="heading">Executive Producer:</span>
      <span className="project-text">{store.fiscalFilms[0].execProducerBio}</span>
      <br />
      <div className="donate-first">
        <a href="#donation-form" className="donate-to">
          <p>Make a donation to </p>
          <p className="title-2">{store.fiscalFilms[0].title}</p>
        </a>
      </div>
    </div>
  );
};

export default allthatsleft;
