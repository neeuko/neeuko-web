import React, { useState, useEffect } from "react";

import Router from "next/router";
import Link from "next/link";
import { H1, H2, H3, H4, A } from "../lib/typography";
import { Colors } from "../lib/colors";
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
  const [subscribeVal, setSubscribeVal] = useState("");
  const [logoHover, setLogoHover] = useState("white");
  const [arrayOfString, setArrayOfString] = useState([]);

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
      setArrayOfString(stringToUpperCaseSplit(activePage));
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

  const stringToUpperCaseSplit = string => {
    let stringToUpperCase = string.toUpperCase();
    let stringToArray = stringToUpperCase.split("");
    return stringToArray;
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
            style={{ marginBottom: Spacing.md }}
            onMouseOver={() => setLogoHover("hover")}
            onMouseOut={() => setLogoHover("white")}
          >
            <S.HamburgerLogo src={`../static/icons/logo_${logoHover}.png`} />
          </S.HamburgerA>
        </Link>
        <S.HamburgerPages>
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
          <Link href="/request">
            <S.HamburgerA
              color={activePage === "request" ? Colors.blue : Colors.white}
            >
              REQUEST
            </S.HamburgerA>
          </Link>
          <Link href="/contact">
            <S.HamburgerA
              color={activePage === "contact" ? Colors.blue : Colors.white}
            >
              CONTACT
            </S.HamburgerA>
          </Link>
        </S.HamburgerPages>
        <S.HamburgerFooter>
          <H4 color={Colors.white} style={{ marginBottom: Spacing.sm }}>
            SUBSCRIBE:
          </H4>
          <S.InputText
            type="text"
            placeholder="youremail@here.com"
            color={Colors.blue}
            width="75%"
            value={subscribeVal}
            onChange={e => setSubscribeVal(e.target.value)}
          />
          <S.InputTextSubmit
            type="submit"
            width={`calc(25% - 26pt)`}
            onClick={() => setSubscribeVal("")}
          >
            <S.InputTextSubmitImg src="../static/icons/send.png" />
          </S.InputTextSubmit>
          <S.Icon
            style={{
              margin: `${Spacing.md} 15pt 0 -6pt`
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
              <S.IconImg src={`../static/icons/ig${onHoverIg}.png`} />
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
              <S.IconImg src={`../static/icons/fb${onHoverFb}.png`} />
            </S.Btn>
          </S.Icon>
        </S.HamburgerFooter>
        <S.VerticalBtn
          type="button"
          onClick={() => handleOnHamburguerClick()}
          transition={transition}
          activeBtn={activeHamburger}
        >
          {arrayOfString.map((string, index) => {
            if (string === "-") {
              return <br />;
            } else {
              return (
                <H1
                  key={index}
                  color={activeHamburger ? Colors.black : Colors.white}
                  style={{
                    transform: "rotate(90deg)",
                    width: "14pt",
                    margin: "-9.3pt",
                    position: "relative",
                    left: "12pt"
                  }}
                >
                  {string}
                </H1>
              );
            }
          })}
        </S.VerticalBtn>
      </S.HamburgerNav>
    </header>
  );
};

export const GridNav = () => {
  const [onHover, setOnHover] = useState("");
  const rowWidth = "750pt";
  const rowHeight = "125pt";
  const gridWidth = "734pt";
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
          <S.GridItem color={onHover === "request" ? Colors.blue : Colors.grey}>
            <Link href="/request">
              <S.GridItemA
                onHover={onHover === "request"}
                onMouseOver={() => setOnHover("request")}
                onMouseOut={() => setOnHover("")}
              >
                REQUEST
              </S.GridItemA>
            </Link>
          </S.GridItem>
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

export const GridMobileNav = () => {
  return (
    <S.GridMobile>
      <Link href="/about-us">
        <S.GridMobileA backgroundUrl="../static/images/about.png" filter>
          ABOUT
        </S.GridMobileA>
      </Link>

      <Link href="/our-work">
        <S.GridMobileA backgroundUrl="../static/images/projects.png" filter>
          OUR WORK
        </S.GridMobileA>
      </Link>

      <Link href="/education">
        <S.GridMobileA backgroundUrl="../static/images/design.png" filter>
          EDUCATION
        </S.GridMobileA>
      </Link>

      <Link href="/fablab">
        <S.GridMobileA backgroundUrl="../static/images/fab.png" filter>
          FABLAB
        </S.GridMobileA>
      </Link>

      <Link href="/community-programs">
        <S.GridMobileA backgroundUrl="../static/images/comm.png" filter>
          COMMUNITY PROGRAMS
        </S.GridMobileA>
      </Link>

      <Link href="/events">
        <S.GridMobileA
          backgroundUrl="../static/images/entrepeneurship.png"
          filter
        >
          EVENTS
        </S.GridMobileA>
      </Link>

      <Link href="/request">
        <S.GridMobileA>REQUEST</S.GridMobileA>
      </Link>

      <Link href="/contact">
        <S.GridMobileA color={Colors.red}>CONTACT</S.GridMobileA>
      </Link>
    </S.GridMobile>
  );
};
