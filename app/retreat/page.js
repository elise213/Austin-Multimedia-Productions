import React from "react";
import Link from "next/link";
import styles from "./retreat.css";
import Image from "next/image";

const Retreat = () => {
  return (
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
            Last Minute Filmmakers’ Retreat!
            <br />
            <br />
            May 14-21. Akumal, Mexico.
            <br />
            <br />
            We are hosting a retreat for filmmakers who have a current project
            that would benefit from a week of dedicated time. If you want to
            spend a week writing, outlining, researching, storyboarding, or
            editing, this might be for you. For $350, you will get a private
            room with a private bathroom and at least one hot meal every day.
            This includes transportation to/from the airport and a tip for the
            staff.
            <br />
            <br />
            This retreat is an experiment in itself. There will be nightly
            feedback sessions with the group, but no formal workshops or
            mentorships, or anything like that. The Only objective is to make
            progress on your film project alongside others doing the same.
            <br />
            <br />
            The house is on the beach, and although we try to minimize
            distractions, there are kayaks and snorkels to use, and a heated
            pool.
            <br />
            <br />
            Only four rooms are available, so apply soon. Some rooms have two
            beds, so let us know if you want to share a room with a friend. This
            would allow us to accommodate more people.
            <br />
            <br />
            Email info@ccearts.org if you have questions.
          </p>
        </div>
      </div>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSewkBYeeJ5-DYAs4v3f5NdlBB1Yqj_ONxfI1kPapjkDFXcNIA/viewform?embedded=true"
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        className="retreat-iframe"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Retreat;
