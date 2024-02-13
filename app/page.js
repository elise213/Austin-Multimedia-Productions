"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "./context/appContext";
import Video from "./components/Video";
import EmailList from "./components/EmailList";
import FrontPageCard from "./components/FrontPageCard";
import styles from "./globals.css";

const Home = () => {
  const { store, actions } = useContext(Context);
  const scrollRef = useRef();
  const [isOverflowing, setIsOverflowing] = useState(false);

  const checkOverflow = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const isOver = container.scrollWidth > container.offsetWidth;
    setIsOverflowing(isOver);
  };

  useEffect(() => {
    const body = document.body;
    if (store.isNavOpen || store.showContactModal) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }, [store.isNavOpen, store.showContactModal]);

  useEffect(() => {
    checkOverflow();
    const handleResize = () => {
      actions.updateScreenSize();
      checkOverflow();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="fake-navbar">
        <img src="/img/logo2.png" alt="CCEA Logo" className="navbar-logo" />
      </div>
      <main className={styles.main}>
        <div className="home-body content">
          <svg width="0" height="0">
            <defs>
              <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
                <path d="M 0,0 L 1,0 L 1,1 Q 0.5,1 0,1 Z" />
              </clipPath>
            </defs>
          </svg>

          <div className="video-about">
            <Video />
          </div>
          <div className="screenings-div">
            <div className="movie-scroll-labels">
              {/* <span>Upcoming Workshops</span>
              <span className="separator"></span>
              <span>and Events</span> */}
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
