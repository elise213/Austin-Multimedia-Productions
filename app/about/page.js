import React from "react";
import Link from "next/link";
import styles from "./about.css";
import FakeNavBar from "../components/FakeNavbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="about-page">
        <FakeNavBar />
        <div className="about-div">
          <span className="">
            The Center for Cinematic and Experimental Arts is a nonprofit
            501(c)3 offering workshops and screenings for the public and
            fiscal-sponsorships for independent artists.
          </span>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
