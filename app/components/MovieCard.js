import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/movie-card.css";
import Sticker from "./Sticker";
import Streaming from "./Streaming";

const MovieCard = (props) => {
  const videoId =
    props.result.trailer && props.result.trailer !== ""
      ? props.result.trailer.split("https://youtu.be/")[1]
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
      if (modal && !modal.contains(event.target) && props.modalIsOpen) {
        props.toggleModal();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [props.modalIsOpen]);

  return (
    <div>
      {props.modalIsOpen && (
        <div className="modal">
          <div
            className="close-mc"
            onClick={props.toggleModal}
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          {/* <div className="modal-content"> */}
          <div className="modal-body">
            <div className="poster-div">
              <div className="together">
                <Image
                  width={300}
                  height={450}
                  className="movie-modal"
                  src={props.result.image}
                  alt=""
                />
                <div className="review-container">
                  <span className="review-title" id="">
                    {props.result.subtitle
                      ? props.result.subtitle
                      : props.result.title}
                  </span>
                  {props.result.instruction && (
                    <p className="review">{props.result.instruction}</p>
                  )}
                  {props.result.instruction2 && (
                    <p className="review">{props.result.instruction2}</p>
                  )}

                  {props.result.description && (
                    <p className="review">{props.result.description}</p>
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
          </div>
          <div className="modal-footer"></div>
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default MovieCard;
