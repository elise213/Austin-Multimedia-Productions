"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "./context/appContext";
import Video from "./components/Video";
import styles from "./globals.css";
import Image from "next/image";
import MovieCard from "./components/MovieCard";
import Link from "next/link";
import FakeNavBar from "./components/FakeNavbar";
import { auto } from "@popperjs/core";
import Footer from "./components/Footer";

const Home = () => {
  const { store, actions } = useContext(Context);
  const scrollRef = useRef();
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const body = document.body;
    const className = "no-scroll";
    const homeBody = document.querySelector(".home-body");

    if (store.isNavOpen || store.showContactModal) {
      body.classList.add(className);
    } else {
      body.classList.remove(className);
    }

    if (homeBody) {
      if (store.isNavOpen || store.showContactModal) {
        homeBody.classList.add(className);
      } else {
        homeBody.classList.remove(className);
      }
    }
  }, [store.isNavOpen, store.showContactModal]);

  const checkOverflow = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const isOver = container.scrollWidth > container.offsetWidth;
    setIsOverflowing(isOver);
  };

  const getActiveEvent = () => {
    const { store } = useContext(Context);
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

  return (
    <>
      <div className={`${styles.main} home-body content`}>
        <FakeNavBar />

        <Image
          height={100}
          width={100}
          layout="responsive"
          quality={100}
          className="amp-1"
          src="/img/amp1.png"
          alt=""
        ></Image>
        <Footer />
      </div>
    </>
  );
};
export default Home;
