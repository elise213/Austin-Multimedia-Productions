import React, { useState, useEffect } from "react";
import Sticker from "./Sticker";
import MovieCard from "./MovieCard";
import styles from "../styles/highlights.css";

const Highlights = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [modalIsOpen]);

  return (
    <div>
      <div className="highlights">
        <div className="sticker-and-review">
          <Sticker className="sticker" sticker={props.result} />
        </div>
        <div className="center-column">
          {!props.modalIsOpen && (
            <>
              {props.result.title && (
                <p className="highlight-title">{props.result.title}</p>
              )}
              {props.result.bullet && (
                <p className="highlight">{props.result.bullet}</p>
              )}
              {props.result.bullet2 && (
                <p className="highlight">{props.result.bullet2}</p>
              )}
              {props.result.bullet3 && (
                <p className="highlight">{props.result.bullet3}</p>
              )}

              <div className="d-flex"></div>

              <div className="more-button">
                <button
                  type="button"
                  className="btn learn-more-2"
                  onClick={toggleModal}
                >
                  Learn More
                </button>
              </div>
            </>
          )}
        </div>

        {modalIsOpen && (
          <div>
            <div className="modal-overlay"></div>
            <div className="modal-div">
              <MovieCard
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                toggleModal={toggleModal}
                result={props.result}
                id={props.result.id}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Highlights;
