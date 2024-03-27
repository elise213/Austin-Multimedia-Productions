// import React from "react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context/appContext";
import styles from "../styles/footer.css";

const Footer = () => {
  const { store, actions } = useContext(Context);
  console.log("INS?", store.isNavOpen);
  const [isFooter, setIsFooter] = useState(false);
  console.log("FOOT?", isFooter);

  useEffect(() => {
    setIsFooter(!store.isNavOpen);
  }, [store.isNavOpen]);

  return (
    <footer className="footer">
      {isFooter && (
        <div className="all-rights">
          <p className="foot">
            2024 © Center for Cinematic and Experimental Arts
          </p>
        </div>
      )}
    </footer>
  );
};

export default Footer;
