"use client";
import React, { useContext, useState, useEffect } from "react";
import styles from "../styles/footer.css";
import { Context } from "../context/appContext";

const Footer = () => {
  const { store, actions } = useContext(Context);
  const [isNavOpen, setIsNavOpen] = useState(store.isNaVOpen);

  useEffect(() => {
    setIsNavOpen(store.isNavOpen);
  }, [store.isNavOpen]);

  return (
    <footer className={styles.footer}>
      {!isNavOpen && (
        <p className="footer-text">
          2024© Center for Cinematic and Experimental Arts
        </p>
      )}
      <div className="socials">
        <i className="fa-brands fa-instagram" />
        {/* <i className="fa-brands fa-twitter" /> */}
        {/* <i className="fa-brands fa-facebook-f" />  */}
      </div>
    </footer>
  );
};

export default Footer;
