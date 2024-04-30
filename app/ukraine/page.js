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
          For credit card donations up to $1,000 and ACH up to $10,000, please
          use the form below.
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
          amount that you want to donate to Zeffy in the "Contribution" box.
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
      <span className="heading">Synopsis:</span>

      <p className="project-text" style={{ textIndent: "40px" }}>
        Follow world-class cellist Matt Haimowitz as he travels from far West
        Texas to Ukraine to perform a lost masterpiece by Ukrainian-born
        composer Thomas deHartmann in collaboration with the Odesa Philharmonic
        Orchestra, on a four city tour of war-weary Ukraine.
      </p>
      <p className="project-text" style={{ textIndent: "40px" }}>
        This hour-long documentary is an exploration of the transformative power
        of music amidst the current conflict in Ukraine, offering a lens through
        which to understand the echoes of cultural, historical, political, and
        social context of the conflict.
      </p>
      <p className="project-text" style={{ textIndent: "40px" }}>
        The deHartmann Cello Concerto was written in 1935 as a defiant
        anti-fascist statement in contrast to growing anti-semitism in Eastern
        Europe. This Cello Concerto has never been performed in Ukraine — until
        now.
      </p>
      <p className="project-text" style={{ textIndent: "40px" }}>
        Against the backdrop of Ukraine's complex history of conflict with
        Russia, the film dips into the resonant narratives of resilience and
        perseverance embodied by the musicians in the Odesa Philharmonic. As the
        eighty-piece orchestra embarks on their first tour since the war, our
        documentary illuminates their individual stories, weaving a rich
        tapestry of human experience that reflects the indomitable spirit of the
        Ukrainian people. Amidst the challenges of war and political upheaval,
        music emerges as a universal language, capable of bridging divides and
        offering a beacon of light in dark times.
      </p>
      <p className="project-text" style={{ textIndent: "40px" }}>
        This film is a joint effort between American filmmakers and a Ukrainian
        filmmaking team — a collaboration that mirrors the journey that Matt
        Haimovitz is sharing with his contemporaries in the Odesa Philharmonic.
        These artists are giving voice to the enduring power of art amidst
        adversity, where classical music becomes an anthem of defiance and a
        rallying cry for justice. Their story is the story of Ukraine, past &
        present. It’s the story of a people who’ve fought oppression and
        overcome — and must do it again.
      </p>
      <p className="project-text" style={{ textIndent: "40px" }}>
        Please consider supporting this film with a tax-deductible contribution.
        Thank you.
      </p>
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
