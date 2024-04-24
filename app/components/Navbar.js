"use client";
import React, { useContext, useEffect } from "react";
import { Context } from "../context/appContext";
import Link from "next/link";
import styles from "../styles/navbar.css";
import EmailList from "./EmailList";
import Contact from "./Contact";

const Navbar = () => {
  const { store, actions } = useContext(Context);

  const toggleNav = () => {
    actions.toggleNavOpen(!store.isNavOpen); // Corrected to use actions for state update
  };

  // Function to toggle the contact modal state
  const toggleContactModal = () => {
    actions.setShowContactModal(!store.showContactModal); // Corrected to use actions for state update
  };

  useEffect(() => {
    // Function to handle clicks outside the navbar
    const handleClickOutside = (event) => {
      const nav = document.querySelector(".new-navbar");
      if (nav && !nav.contains(event.target) && store.isNavOpen) {
        actions.setIsNavOpen(false); // Use actions to update the state
      }
    };

    // Add event listener for clicks
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("click", handleClickOutside);
    };
  }, [store.isNavOpen, actions.setIsNavOpen]);

  return (
    <>
      <nav className={`new-navbar ${store.isNavOpen ? "open" : ""}`}>
        <div className="menu-icon" onClick={toggleNav}>
          {!store.modalIsOpen && (
            <div className={`open-icon ${!store.isNavOpen ? "closed" : ""}`}>
              <i className="fas fa-bars"></i>
            </div>
          )}
          <div className={`close-icon ${store.isNavOpen ? "open" : ""}`}>
            <span className="navbar-toggler">
              <i class="fa-solid fa-xmark"></i>
            </span>
          </div>
        </div>

        {/* )} */}

        <div className={`navbar-content ${store.isNavOpen ? "open" : ""}`}>
          <span
            className="nav-item"
            onClick={() => {
              actions.setIsNavOpen(false);
              actions.setShowContactModal(false);
            }}
          >
            <Link href="/" passHref>
              HOME
            </Link>
          </span>

          <span
            className="nav-item"
            onClick={() => {
              actions.setIsNavOpen(false);
              actions.setShowContactModal(false);
            }}
          >
            <Link href="/about" passHref>
              ABOUT
            </Link>
          </span>

          <span
            className="nav-item"
            onClick={() => {
              actions.setIsNavOpen(false);
              actions.setShowContactModal(false);
            }}
          >
            <Link href="/fiscal" passHref>
              SPONSORSHIP
            </Link>
          </span>
          <span
            className="nav-item"
            onClick={() => {
              actions.setIsNavOpen(false);
              toggleContactModal();
            }}
          >
            CONTACT
          </span>
          {/* <EmailList /> */}
        </div>
      </nav>

      {store.showContactModal && (
        <div className="modal-contact">
          <div className="modal-content-contact">
            <Contact />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
