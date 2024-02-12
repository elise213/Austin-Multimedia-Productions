import React from "react";
import Image from "next/image";
import styles from "../styles/footer.css";
import EmailList from "./EmailList";

const Footer = (isLargeScreen) => (
  <footer className="footer">
    <div className="larger-footer-div">
      <div className="all-rights">
        <div className="foot-cont">
          <p className="foot">
            © 2024 Center for Cinematic and Experimental Arts
          </p>
          <p className="foot">All Rights Reserved</p>
        </div>
      </div>
      <div className="socials">
        <i className="fa-brands fa-instagram" />
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-facebook-f" />
      </div>
    </div>
  </footer>
);

export default Footer;
