import React, { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import { H1, H2, A } from "../lib/typography";
import { Colors } from "../lib/colors";
import { VerticalBtn } from "../components/buttons.js";
import { Spacing } from "../lib/spacing";
import * as S from "../lib/styles";

export const Hamburger = props => {
  const [initialized, setInitialized] = useState(false);
  const [transition, setTransition] = useState("0.3s");
  const [activeHamburger, setActiveHamburger] = useState(false);
  const [activeDarkBackground, setActiveDarkBackground] = useState(false);
  const [activePage, setActivePage] = useState("");
  const [onHoverIg, setOnHoverIg] = useState("");
  const [onHoverFb, setOnHoverFb] = useState("");

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
      <S.HamburgerBG
        activeDarkBackground={activeDarkBackground}
        transition={transition}
        onClick={() => handleOnHamburguerClick()}
      />
      <S.HamburgerNav activeHamburger={activeHamburger} transition={transition}>
        <Link href="/">
          <S.HamburgerA
            color={Colors.white}
            style={{ marginBottom: "40pt", fontSize: "3rem" }}
          >
            neeuko
          </S.HamburgerA>
        </Link>
        <Link href="/about-us">
          <S.HamburgerA
            color={activePage === "about-us" ? Colors.blue : Colors.white}
          >
            ABOUT US
          </S.HamburgerA>
        </Link>
        <Link href="/our-work">
          <S.HamburgerA
            color={activePage === "our-work" ? Colors.blue : Colors.white}
          >
            OUR WORK
          </S.HamburgerA>
        </Link>
        <Link href="/education">
          <S.HamburgerA
            color={activePage === "education" ? Colors.blue : Colors.white}
          >
            EDUCATION
          </S.HamburgerA>
        </Link>
        <Link href="/fablab">
          <S.HamburgerA
            color={activePage === "fablab" ? Colors.blue : Colors.white}
          >
            FABLAB
          </S.HamburgerA>
        </Link>
        <Link href="/community-programs">
          <S.HamburgerA
            color={
              activePage === "community-programs" ? Colors.blue : Colors.white
            }
          >
            COMMUNITY PROGRAMS
          </S.HamburgerA>
        </Link>
        <Link href="/events">
          <S.HamburgerA
            color={activePage === "events" ? Colors.blue : Colors.white}
          >
            EVENTS
          </S.HamburgerA>
        </Link>
        <Link href="/contact">
          <S.HamburgerA
            color={activePage === "contact" ? Colors.blue : Colors.white}
          >
            CONTACT
          </S.HamburgerA>
        </Link>
        <S.Icon
          style={{
            margin: "60pt 15pt 0 -6pt"
          }}
        >
          <S.Btn
            type="button"
            onClick={() =>
              window.open("https://www.instagram.com/neeuko/", "_blank")
            }
            onMouseOver={() => setOnHoverIg("_hover")}
            onMouseOut={() => setOnHoverIg("")}
          >
            <img src={`../static/icons/ig${onHoverIg}.png`} width="44pt" />
          </S.Btn>
        </S.Icon>
        <S.Icon>
          <S.Btn
            type="button"
            onClick={() =>
              window.open("https://www.facebook.com/neeuko/", "_blank")
            }
            onMouseOver={() => setOnHoverFb("_hover")}
            onMouseOut={() => setOnHoverFb("")}
          >
            <img src={`../static/icons/fb${onHoverFb}.png`} width="44pt" />
          </S.Btn>
        </S.Icon>
        <VerticalBtn
          text={activePage === "" ? "home" : activePage}
          onClick={() => handleOnHamburguerClick()}
          activeBtn={activeHamburger}
          transition={transition}
        />
      </S.HamburgerNav>
    </header>
  );
};

export const GridNav = () => {
  const [onHover, setOnHover] = useState("");
  const rowWidth = "900pt";
  const rowHeight = "150pt";
  const gridWidth = "880pt";
  return (
    <S.Grid>
      <S.WhiteBG width={gridWidth} />
      <S.GridContainer>
        <S.GridRow rowWidth={rowWidth} rowHeight={rowHeight}>
          <S.GridItemImg backgroundUrl="../static/images/about_01.png">
            <Link href="/about-us">
              <S.GridItemAWhite
                onHover={onHover === "about-us"}
                onMouseOver={() => setOnHover("about-us")}
                onMouseOut={() => setOnHover("")}
              >
                ABOUT
              </S.GridItemAWhite>
            </Link>
          </S.GridItemImg>
          <S.GridItemImg backgroundUrl="../static/images/about_02.png">
            <Link href="/about-us">
              <S.GridItemAWhite
                onHover={onHover === "about-us"}
                onMouseOver={() => setOnHover("about-us")}
                onMouseOut={() => setOnHover("")}
              />
            </Link>
          </S.GridItemImg>
          <S.GridItem>
            <Link href="/our-work">
              <S.GridItemA
                onHover={onHover === "our-work"}
                onMouseOver={() => setOnHover("our-work")}
                onMouseOut={() => setOnHover("")}
              >
                OUR WORK
              </S.GridItemA>
            </Link>
          </S.GridItem>
          <S.GridItem color={Colors.black}>
            <Link href="/our-work">
              <S.GridItemA
                onHover={onHover === "our-work"}
                onMouseOver={() => setOnHover("our-work")}
                onMouseOut={() => setOnHover("")}
              />
            </Link>
          </S.GridItem>
          <S.GridItem color={Colors.black}>
            <Link href="/our-work">
              <S.GridItemA
                onHover={onHover === "our-work"}
                onMouseOver={() => setOnHover("our-work")}
                onMouseOut={() => setOnHover("")}
              />
            </Link>
          </S.GridItem>
          <S.GridItemImg backgroundUrl="../static/images/comm_01.png">
            <Link href="/community-programs">
              <S.GridItemAWhite
                onHover={onHover === "community-programs"}
                onMouseOver={() => setOnHover("community-programs")}
                onMouseOut={() => setOnHover("")}
              />
            </Link>
          </S.GridItemImg>
        </S.GridRow>
        <S.GridRow rowWidth={rowWidth} rowHeight={rowHeight}>
          <S.GridItem color={Colors.grey} />
          <S.GridItemImg backgroundUrl="../static/images/about_03.png">
            <Link href="/about-us">
              <S.GridItemAWhite
                onHover={onHover === "about-us"}
                onMouseOver={() => setOnHover("about-us")}
                onMouseOut={() => setOnHover("")}
              />
            </Link>
          </S.GridItemImg>
          <S.GridItemImg backgroundUrl="../static/images/fab_01.png">
            <Link href="/fablab">
              <S.GridItemA
                onHover={onHover === "fablab"}
                onMouseOver={() => setOnHover("fablab")}
                onMouseOut={() => setOnHover("")}
              >
                FABLAB
              </S.GridItemA>
            </Link>
          </S.GridItemImg>
          <S.GridItemImg backgroundUrl="../static/images/fab_02.png">
            <Link href="/fablab">
              <S.GridItemA
                onHover={onHover === "fablab"}
                onMouseOver={() => setOnHover("fablab")}
                onMouseOut={() => setOnHover("")}
              />
            </Link>
          </S.GridItemImg>
          <S.GridItemImg backgroundUrl="../static/images/comm_02.png">
            <Link href="/community-programs">
              <S.GridItemAWhite
                onHover={onHover === "community-programs"}
                onMouseOver={() => setOnHover("community-programs")}
                onMouseOut={() => setOnHover("")}
              >
                COMMUNITY PROGRAMS
              </S.GridItemAWhite>
            </Link>
          </S.GridItemImg>
          <S.GridItemImg backgroundUrl="../static/images/comm_03.png">
            <Link href="/community-programs">
              <S.GridItemAWhite
                onHover={onHover === "community-programs"}
                onMouseOver={() => setOnHover("community-programs")}
                onMouseOut={() => setOnHover("")}
              />
            </Link>
          </S.GridItemImg>
        </S.GridRow>
        <S.GridRow rowWidth={rowWidth} rowHeight={rowHeight}>
          <S.GridItem color={Colors.black}>
            <Link href="/education">
              <S.GridItemA
                onHover={onHover === "education"}
                onMouseOver={() => setOnHover("education")}
                onMouseOut={() => setOnHover("")}
              />
            </Link>
          </S.GridItem>
          <S.GridItem color={Colors.black}>
            <Link href="/education">
              <S.GridItemA
                onHover={onHover === "education"}
                onMouseOver={() => setOnHover("education")}
                onMouseOut={() => setOnHover("")}
              >
                EDUCATION
              </S.GridItemA>
            </Link>
          </S.GridItem>
          <S.GridItemImg backgroundUrl="../static/images/fab_03.png">
            <Link href="/fablab">
              <S.GridItemA
                onHover={onHover === "fablab"}
                onMouseOver={() => setOnHover("fablab")}
                onMouseOut={() => setOnHover("")}
              />
            </Link>
          </S.GridItemImg>
          <S.GridItem color={Colors.black}>
            <Link href="/events">
              <S.GridItemA
                onHover={onHover === "events"}
                onMouseOver={() => setOnHover("events")}
                onMouseOut={() => setOnHover("")}
              />
            </Link>
          </S.GridItem>
          <S.GridItem color={Colors.black}>
            <Link href="/events">
              <S.GridItemA
                onHover={onHover === "events"}
                onMouseOver={() => setOnHover("events")}
                onMouseOut={() => setOnHover("")}
              >
                EVENTS
              </S.GridItemA>
            </Link>
          </S.GridItem>
          <S.GridItemImg backgroundUrl="../static/images/comm_04.png">
            <Link href="/community-programs">
              <S.GridItemAWhite
                onHover={onHover === "community-programs"}
                onMouseOver={() => setOnHover("community-programs")}
                onMouseOut={() => setOnHover("")}
              />
            </Link>
          </S.GridItemImg>
        </S.GridRow>
        <S.GridRow rowWidth={rowWidth} rowHeight={rowHeight}>
          <S.GridItem color={Colors.black}>
            <Link href="/education">
              <S.GridItemA
                onHover={onHover === "education"}
                onMouseOver={() => setOnHover("education")}
                onMouseOut={() => setOnHover("")}
              />
            </Link>
          </S.GridItem>
          <S.GridItemImg backgroundUrl="../static/images/fab_04.png">
            <Link href="/fablab">
              <S.GridItemA
                onHover={onHover === "fablab"}
                onMouseOver={() => setOnHover("fablab")}
                onMouseOut={() => setOnHover("")}
              />
            </Link>
          </S.GridItemImg>
          <S.GridItemImg backgroundUrl="../static/images/fab_05.png">
            <Link href="/fablab">
              <S.GridItemA
                onHover={onHover === "fablab"}
                onMouseOver={() => setOnHover("fablab")}
                onMouseOut={() => setOnHover("")}
              />
            </Link>
          </S.GridItemImg>
          <S.GridItem color={Colors.grey} />
          <S.GridItem color={Colors.black}>
            <Link href="/events">
              <S.GridItemA
                onHover={onHover === "events"}
                onMouseOver={() => setOnHover("events")}
                onMouseOut={() => setOnHover("")}
              />
            </Link>
          </S.GridItem>
          <S.GridItem color={onHover === "contact" ? Colors.blue : Colors.red}>
            <Link href="/contact">
              <S.GridItemA
                onHover={onHover === "contact"}
                onMouseOver={() => setOnHover("contact")}
                onMouseOut={() => setOnHover("")}
              >
                CONTACT
              </S.GridItemA>
            </Link>
          </S.GridItem>
        </S.GridRow>
      </S.GridContainer>
    </S.Grid>
  );
};
