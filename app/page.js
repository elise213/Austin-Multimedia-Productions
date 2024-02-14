"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "./context/appContext";
import Video from "./components/Video";
// import EmailList from "./components/EmailList";
// import FrontPageCard from "./components/FrontPageCard";
import styles from "./globals.css";
// import Highlights from "./components/Highlights";
import Sticker from "./components/Sticker";
import Image from "next/image";
import MovieCard from "./components/MovieCard";

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

  const getActiveEvent = () => {
    const { store } = useContext(Context); // Assuming Context is your global state context
    return store.events.find((event) => event.id === store.activeEventId);
  };

  useEffect(() => {
    if (store.modalIsOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [store.modalIsOpen]);

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
            <div
              ref={scrollRef}
              className="scroll-search-results"
              style={{
                justifyContent: isOverflowing ? "flex-start" : "center",
              }}
            >
              <ul>
                {store.events.map((result, i) => {
                  console.log(result);
                  return (
                    <li
                      key={i}
                      style={
                        i === store.events.length - 1
                          ? { paddingRight: "35px" }
                          : {}
                      }
                    >
                      <div className="front-page-div">
                        <div className="front-container">
                          <Image
                            width={220}
                            height={320}
                            quality={70}
                            className="movie"
                            src={result.image}
                            alt=""
                          />

                          <div className="highlights">
                            <div className="sticker-and-review">
                              <Sticker className="sticker" sticker={result} />
                            </div>
                            <div className="center-column">
                              {!store.modalIsOpen && (
                                <>
                                  {result.title && (
                                    <p className="highlight-title">
                                      {result.title}
                                    </p>
                                  )}
                                  {result.bullet && (
                                    <p className="highlight">{result.bullet}</p>
                                  )}
                                  {result.bullet2 && (
                                    <p className="highlight">
                                      {result.bullet2}
                                    </p>
                                  )}
                                  {result.bullet3 && (
                                    <p className="highlight">
                                      {result.bullet3}
                                    </p>
                                  )}

                                  <div className="d-flex"></div>

                                  <div className="more-button">
                                    <button
                                      type="button"
                                      className="btn learn-more-2"
                                      onClick={() =>
                                        actions.toggleModal(result.id)
                                      } // Pass the event index or ID
                                    >
                                      Learn More
                                    </button>
                                  </div>
                                </>
                              )}
                            </div>

                            {store.modalIsOpen && (
                              <>
                                <div className="modal-overlay"></div>
                                <MovieCard result={getActiveEvent()} />
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
