import React, { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import { H1, H2, A } from "../lib/typography";
import { Colors } from "../lib/colors";
import { VerticalBtn } from "../components/buttons.js";

export const Hamburger = props => {
  const [initialized, setInitialized] = useState(false);
  const [transition, setTransition] = useState("0.3s");
  const [activeHamburger, setActiveHamburger] = useState(false);
  const [activeDarkBackground, setActiveDarkBackground] = useState(false);
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      // add here scripts that need to be called on component will mount
      const currentPath = () => {
        return Router.asPath.replace(/^\/+|\/+$/g, "");
      };
      setActivePage(currentPath());
    } else {
      // add here scripts that need to be called on component did update
    }
    // add here scripts that need to be called on component will unmount
    return () => {};
  });

  const handleOnHamburguerClick = () => {
    if (activeHamburger == false) {
      setActiveHamburger(true);
      setActiveDarkBackground(true);
    } else {
      setActiveHamburger(false);
      setActiveDarkBackground(false);
    }
  };

  return (
    <header>
      {/* background */}
      <div
        style={{
          backgroundColor: "grey",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: "0",
          opacity: activeDarkBackground ? "0.5" : "0",
          transition: transition,
          zIndex: activeDarkBackground ? "10" : "-1"
        }}
      />
      <nav
        style={{
          position: "fixed",
          left: activeHamburger ? "0" : "-300pt",
          backgroundColor: Colors.black,
          height: "100%",
          width: "300pt",
          transition: transition,
          zIndex: "11"
        }}
      >
        <div
          style={{
            width: "127pt",
            position: "relative",
            margin: "auto"
          }}
        >
          <Link href="/">
            <A color={activePage === "" ? Colors.blue : Colors.white}>Home</A>
          </Link>
          <br />
          <br />
          <Link href="/about-us">
            <A color={activePage === "about-us" ? Colors.blue : Colors.white}>
              ABOUT US
            </A>
          </Link>
          <br />
          <br />
          <Link href="/our-work">
            <A color={activePage === "our-work" ? Colors.blue : Colors.white}>
              OUR WORK
            </A>
          </Link>
          <br />
          <br />
          <Link href="/education">
            <A color={activePage === "education" ? Colors.blue : Colors.white}>
              EDUCATION
            </A>
          </Link>
          <br />
          <br />
          <Link href="/fablab">
            <A color={activePage === "fablab" ? Colors.blue : Colors.white}>
              FABLAB
            </A>
          </Link>
          <br />
          <br />
          <Link href="/community-programs">
            <A
              color={
                activePage === "community-programs" ? Colors.blue : Colors.white
              }
            >
              COMMUNITY PROGRAMS
            </A>
          </Link>
          <br />
          <br />
          <Link href="/events">
            <A color={activePage === "events" ? Colors.blue : Colors.white}>
              EVENTS
            </A>
          </Link>
          <br />
          <br />
          <Link href="/contact">
            <A color={activePage === "contact" ? Colors.blue : Colors.white}>
              CONTACT
            </A>
          </Link>
        </div>
        <VerticalBtn
          text={activePage === "" ? "home" : activePage}
          onClick={() => handleOnHamburguerClick()}
          activeBtn={activeHamburger}
          transition={transition}
        />
      </nav>
    </header>
  );
};
