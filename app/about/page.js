import React from "react";
import Link from "next/link";
import styles from "./about.css";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      {/* <div className="line"></div> */}
      <Image
        height={100}
        width={200}
        className="about-image"
        src={"/img/LOGO2.png"}
        alt=""
      ></Image>

      <div className="about">
        <span className="">
          The Center for Cinematic and Experimental Arts (CCEA) is a 501(c)3
          nonprofit promoting high-quality cinematic experiences by helping
          artists overcome the challenges of independent filmmaking. We offer
          hands-on workshops, fiscal sponsorship, in-house legal consulting,
          support for analog film workflows, exhibition opportunities, and more.
        </span>
      </div>
    </div>
  );
};

export default About;
