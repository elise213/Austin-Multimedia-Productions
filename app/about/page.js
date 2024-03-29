import React from "react";
import Link from "next/link";
import styles from "./about.css";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <div className="fake-navbar">
        <img src="/img/logo2.png" alt="CCEA Logo" className="navbar-logo" />
      </div>

      <div className="about">
        <span className="">
          The Center for Cinematic and Experimental Arts is a nonprofit 501(c)3
          offering hands-on workshops, fiscal sponsorship, and in-house legal
          consulting to independent filmmakers and artists.
        </span>
      </div>
    </div>
  );
};

export default About;
