import React, { useEffect, useContext } from "react";
import { Context } from "../context/appContext";
import Image from "next/image";
import styles from "../styles/movie-card.css";

const MovieCard = ({ result }) => {
  const { store, actions } = useContext(Context);

  if (!result) {
    return null;
  }

  const videoId = result.trailer
    ? new URL(result.trailer).searchParams.get("v")
    : null;
  const trailerUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?&loop=1&mute=1&playlist=${videoId}&showinfo=0&rel=0&enablejsapi=1`
    : null;

  useEffect(() => {
    function adjustCloseButtonPosition() {
      const modal = document.querySelector(".modal");
      const closeMc = document.querySelector(".close-mc");

      if (modal && closeMc) {
        const modalHeight = modal.offsetHeight;
        const topValue = `calc(50vh - ${modalHeight / 2}px)`;
        closeMc.style.top = topValue;
      }
    }

    // Run once and also on window resize
    adjustCloseButtonPosition();
    window.addEventListener("resize", adjustCloseButtonPosition);

    return () =>
      window.removeEventListener("resize", adjustCloseButtonPosition);
  }, [store.modalIsOpen]); // Dependency array ensures this effect runs when modalIsOpen state changes

  useEffect(() => {
    function handleClickOutside(event) {
      const modal = document.querySelector(".modal");
      if (modal && !modal.contains(event.target) && store.modalIsOpen) {
        actions.toggleModal();
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [store.modalIsOpen, actions]); // Adding `actions` to dependencies might not be necessary if actions do not change

  return (
    <div>
      {store.modalIsOpen && (
        <div className="modal">
          <div className="together holographic">
            <div
              className="close-mc"
              onClick={(e) => {
                e.stopPropagation();
                actions.toggleModal();
              }}
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
            <Image
              width={300}
              height={450}
              className="movie-modal"
              src={result.image}
              alt=""
            />
            <div className="review-container">
              <span className="review-title" id="">
                {result.subtitle ? result.subtitle : result.title}
              </span>

              {result.description && (
                <p className="review">{result.description}</p>
              )}
              {result.instruction && (
                <p className="review">{result.instruction}</p>
              )}
              {result.instruction2 && (
                <p className="review">{result.instruction2}</p>
              )}
              {trailerUrl ? (
                <div className="streaming-trailer-div">
                  <div className="trailer-container">
                    <iframe
                      className="iframe-2"
                      src={trailerUrl}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
