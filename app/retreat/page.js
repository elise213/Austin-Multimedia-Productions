import React from "react";
import Link from "next/link";
import styles from "./retreat.css";
import Image from "next/image";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Filmmakers' Retreat",
    openGraph: {
      description: "CCEA hosts 2024 Filmmakers' Retreat",
      images: ["https://ccearts.org/img/CCEARETREATSMALLER.png"],
    },
  };
}

const Retreat = () => {
  return (
    <>
      <div className="retreat-container">
        <div className="retreat-nav">
          <Link href="/" passHref>
            <img src="/img/logo2.png" alt="CCEA Logo" className="navbar-logo" />
          </Link>
        </div>
        <div className="retreat-sub1">
          <Image
            height={1000}
            width={2000}
            className="retreat-image"
            src={"/img/CCEARETREAT.png"}
            alt=""
          ></Image>
          <div className="retreat-text-div">
            <p className="retreat-text">
              Filmmakers’ Retreat. May 14-21.
              <br />
              Aventuras Akumal, Quintana Roo, México.
              <br />
              <br />
              If you need to spend a week writing, editing, or something else
              involving making independent movies, come join us in Mexico! For
              $350, you will get a private room with a private bathroom and
              dinner every night, in a big house on a beautiful beach. This fee
              includes transportation to/from the airport and a tip for the
              local staff.
              <br />
              <br />
              This retreat is an experiment. There will be nightly feedback
              sessions with the group, but no formal workshops or mentorships,
              or anything like that. The only objective is to make progress on
              your film project alongside others doing the same. There will be
              kayaks and snorkels to use, and a heated pool.
              <br />
              <br />
              There are only four more rooms available, some with two beds, so
              let us know if you want to share a room with a friend. Email
              info@ccearts.org if you have questions.
            </p>
          </div>
        </div>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSewkBYeeJ5-DYAs4v3f5NdlBB1Yqj_ONxfI1kPapjkDFXcNIA/viewform?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="retreat-iframe"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
};

export default Retreat;
