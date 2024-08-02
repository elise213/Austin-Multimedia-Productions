import React from "react";
import Link from "next/link";
import styles from "./about.css";
import Image from "next/image";
import FakeNavBar from "../components/FakeNavbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <FakeNavBar />
      <div className="about-page">
        <div className="about-div">
          <span className="">
            The Center for Cinematic and Experimental Arts is a nonprofit
            501(c)3 offering workshops for the public and fiscal-sponsorships
            for independent artists.
          </span>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
