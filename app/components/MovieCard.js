import React, { useEffect, useContext } from "react";
import { Context } from "../context/appContext";
import Image from "next/image";
import styles from "../styles/movie-card.css";
import Sticker from "./Sticker";
import Streaming from "./Streaming";

const MovieCard = ({ result }) => {
  if (!result) {
    return null;
  }
  const { store, actions } = useContext(Context);

  // const result = store.activeEventId;
  const videoId =
    result.trailer && result.trailer !== ""
      ? result.trailer.split("https://youtu.be/")[1]
      : null;
  const trailerUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?&loop=1&mute=1&&playlist=${videoId}&showinfo=0&rel=0&enablejsapi=1`
    : null;

  // Find and hide the YouTube title element
  useEffect(() => {
    const player = document.getElementById("movie_player");
    if (player) {
      const titleElement = player.querySelector(".ytp-title");
      if (titleElement) {
        titleElement.style.display = "none";
      }
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.querySelector(".modal");
      if (modal && !modal.contains(event.target) && store.modalIsOpen) {
        actions.toggleModal();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [store.modalIsOpen]);

  return (
    <div>
      {store.modalIsOpen && (
        <div className="modal">
          <div className="together">
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
