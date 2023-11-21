"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import Link from "next/link";
import Video from "../app/components/Video";
import styles from "./globals.css";
import { Context } from "./context/appContext";
import EmailList from "./components/EmailList";
import FrontPageCard from "./components/FrontPageCard";

const Home = () => {
  const { store, actions } = useContext(Context);
  const scrollRef = useRef();

  const [isClient, setIsClient] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  console.log(store.windowWidth);

  const checkOverflow = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const isOver = container.scrollWidth > container.offsetWidth;
    setIsOverflowing(isOver);
  };

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      checkOverflow();
    };

    window.addEventListener("resize", handleResize);
    checkOverflow();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient, store.movies, windowWidth]);

  return (
    <>
      <img src="/img/logo2.png" alt="CCEA Logo" className="navbar-logo" />
      <div className="fake-navbar"> </div>
      <main className={styles.main}>
        <div className="home-body content">
          {/* <div className="decoration"> */}
          {/* 
            <img src="/img/logo2.png" alt="CCEA Logo" className="side-logo" />

        {/* </div> */}

          <svg width="0" height="0">
            <defs>
              <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
                <path d="M 0,0 L 1,0 L 1,1 Q 0.5,1 0,1 Z" />
              </clipPath>
            </defs>
          </svg>

          <div className="video-about">
            <Video />
            {/* <div className="about">
            <span className="">
              The Center for Cinematic and Experimental Arts (CCEA) is a 501(c)3
              nonprofit promoting high-quality cinematic experiences through
              exhibition, workshops, and helping talented artists overcome the
              challenges unique to independent filmmaking.
            </span>
          </div> */}
          </div>
          <div className="screenings-div">
            {/* {store.windowWidth > 500 ? ( */}
            {/* <div className="movie-scroll-labels">
              <span>Upcoming Workshops and Events</span>
            </div>
          ) : ( */}
            <div className="movie-scroll-labels">
              <span>Upcoming Workshops</span>
              <span className="separator"></span>
              <span>and Events</span>
            </div>

            {/* )} */}

            <div
              ref={scrollRef}
              className="scroll-search-results"
              style={{
                justifyContent: isOverflowing ? "flex-start" : "center",
              }}
            >
              <ul>
                {store.movies.map((result, i) => (
                  <li
                    key={i}
                    style={
                      i === store.movies.length - 1
                        ? { paddingRight: "35px" }
                        : {}
                    }
                  >
                    <div>
                      <FrontPageCard id={i} result={result} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
