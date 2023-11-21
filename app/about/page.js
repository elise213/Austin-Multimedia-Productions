import React from "react";
import Link from "next/link";
import styles from "./about.css";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      {/* <div className="line"></div>
      <Image
        height={100}
        width={200}
        className="about-image"
        src={"/img/LOGO2.png"}
        alt=""
      ></Image> */}

      <div className="about">
        <span className="">
          The Center for Cinematic and Experimental Arts (CCEA) is a 501(c)3
          nonprofit promoting high-quality cinematic experiences through
          exhibition, workshops, and helping talented artists overcome the
          challenges unique to independent filmmaking.
        </span>
      </div>

      <div className="about">
        <span className="">
          CCEA hosts screenings and hands-on workshops in Austin Texas and
          throughout the World. We have a variety of ways to support filmmakers
          including fiscal sponsorship, in-house legal consulting, support for
          analog film workflows, workshops, and more. We champion creativity
          over commercialism, and genuine excitement over hype. In doing so, we
          aim to facilitate unique cinematic experiences that enrich our psyches
          and communities.
        </span>
      </div>
    </div>
  );
};

export default About;
