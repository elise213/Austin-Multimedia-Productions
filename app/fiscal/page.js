"use client";
import React from "react";
import Link from "next/link";
import styles from "./fiscal.css";

const Fiscal = () => {
  return (
    <>
      <div className={`fiscal-container`}>
        <div className="fiscal-about">
          <span className="">
            CCEA's fiscal sponsorship program allows filmmakers to solicit and
            receive tax-deductible donations from individuals, and gifts from
            foundations, to make art. Please read our
            <Link href="/fiscalFAQ" passHref className="FAQ-link">
              {" "}
              Fiscal Sponsorship FAQ{" "}
            </Link>
            before applying to the program.
          </span>
          <br />
          <br />
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfOSXl0DE6kTpCli5zwu4TeSDA0yIQfSzTEx4uyrZSbR-8Q6Q/viewform?embedded=true"
            width="640"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </>
  );
};

export default Fiscal;
