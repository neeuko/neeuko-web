import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import { H1, H4 } from '../lib/typography';
import Colors from '../lib/colors';
import Spacing from '../lib/spacing';
import * as S from '../lib/styles';

export const Hamburger = () => {
  const [activeHamburger, setActiveHamburger] = useState(false);
  const [activeDarkBackground, setActiveDarkBackground] = useState(false);
  const [activePage, setActivePage] = useState('');
  const [onHoverIg, setOnHoverIg] = useState('');
  const [onHoverFb, setOnHoverFb] = useState('');
  const [subscribeVal, setSubscribeVal] = useState('');
  const [logoHover, setLogoHover] = useState('white');
  const [arrayOfString, setArrayOfString] = useState([]);
  const [mailStatus, setMailStatus] = useState(0);

  const handleOnHamburguerClick = () => {
    if (activeHamburger === false) {
      setActiveHamburger(true);
      setActiveDarkBackground(true);
    } else {
      setActiveHamburger(false);
      setActiveDarkBackground(false);
    }
  };

  const stringToUpperCaseSplit = (string) => {
    const stringToUpperCase = string.toUpperCase();
    const stringToArray = stringToUpperCase.split('');
    return stringToArray;
  };

  // SUBMIT REQUEST
  const submitRequest = async () => {
    try {
      if (subscribeVal === '') {
        setMailStatus(0);
        return alert('Add a proper EMAIL');
      }
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: subscribeVal,
          status: 'subscribed',
        }),
      };
  
      const res = await fetch('https://subscribe-email.mendezlenny.now.sh/api', options);
      // CLEAR VALUES
      setSubscribeVal('');
      console.log(res.status);
      
      return setMailStatus(res.status); // 200 = true, 502 = false
    } catch (err) {
      console.log('Error: ', err);
      alert('Server seems to be down. Please try later.');
      setMailStatus(502);
    }
  };

  useEffect(() => {
    if (activePage === '') {
      const currentPath = () => (Router.asPath.replace(/^\/+|\/+$/g, ''));
      setActivePage(currentPath());
      setArrayOfString(stringToUpperCaseSplit(currentPath()));
    }
  });

  return (
    <header>
      <S.HamburgerBG
        activeDarkBackground={activeDarkBackground}
        onClick={() => handleOnHamburguerClick()}
      />
      <S.HamburgerNav activeHamburger={activeHamburger}>
        <Link href="/">
          <S.HamburgerA
            style={{ marginBottom: Spacing.md }}
            onMouseOver={() => setLogoHover('hover')}
            onMouseOut={() => setLogoHover('white')}
            onFocus={() => setLogoHover('hover')}
            onBlur={() => setLogoHover('white')}
          >
            <S.HamburgerLogo src={`../static/icons/logo_${logoHover}.png`} />
          </S.HamburgerA>
        </Link>
        <S.HamburgerPages>
          <Link href="/about-us">
            <S.HamburgerA
              color={activePage === 'about-us' ? Colors.blue : Colors.white}
            >
              ABOUT US
            </S.HamburgerA>
          </Link>
          <Link href="/our-work">
            <S.HamburgerA
              color={activePage === 'our-work' ? Colors.blue : Colors.white}
            >
              OUR WORK
            </S.HamburgerA>
          </Link>
          <Link href="/education">
            <S.HamburgerA
              color={activePage === 'education' ? Colors.blue : Colors.white}
            >
              EDUCATION
            </S.HamburgerA>
          </Link>
          <Link href="/fablab">
            <S.HamburgerA
              color={activePage === 'fablab' ? Colors.blue : Colors.white}
            >
              FABLAB
            </S.HamburgerA>
          </Link>
          <Link href="/community-programs">
            <S.HamburgerA
              color={
                activePage === 'community-programs' ? Colors.blue : Colors.white
              }
            >
              COMMUNITY PROGRAMS
            </S.HamburgerA>
          </Link>
          <Link href="/events">
            <S.HamburgerA
              color={activePage === 'events' ? Colors.blue : Colors.white}
            >
              EVENTS
            </S.HamburgerA>
          </Link>
          <Link href="/request">
            <S.HamburgerA
              color={activePage === 'request' ? Colors.blue : Colors.white}
            >
              REQUEST
            </S.HamburgerA>
          </Link>
          <Link href="/contact">
            <S.HamburgerA
              color={activePage === 'contact' ? Colors.blue : Colors.white}
            >
              CONTACT
            </S.HamburgerA>
          </Link>
        </S.HamburgerPages>
        <S.HamburgerFooter>

          {/* <!-- Begin Mailchimp Signup Form -->
          <div id="mc_embed_signup">
          <form action="https://sagrado.us20.list-manage.com/subscribe/post?u=6aba1ab0f0559ca5d077a9ede&amp;id=2e86e2568c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
            
            <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6aba1ab0f0559ca5d077a9ede_2e86e2568c" tabindex="-1" value=""></div>
              <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
              </div>
          </form>
          </div>
          <!--End mc_embed_signup--> */}

          <H4 color={Colors.white} style={{ marginBottom: Spacing.sm }}>
            SUBSCRIBE:
          </H4>
          <S.InputText
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            placeholder="youremail@here.com"
            required
            color={Colors.blue}
            width="75%"
            value={subscribeVal}
            onChange={e => setSubscribeVal(e.target.value)}
          />
          <S.InputTextSubmit
            type="submit"
            width="calc(25% - 26pt)"
            value="Submit"
            onClick={() => submitRequest()}
          >
            <S.InputTextSubmitImg src="../static/icons/send.png" />
          </S.InputTextSubmit>
          <S.Icon
            style={{
              margin: `${Spacing.md} 15pt 0 -6pt`,
            }}
          >
            <S.Btn
              type="button"
              onClick={() => window.open('https://www.instagram.com/neeuko/', '_blank')}
              onMouseOver={() => setOnHoverIg('_hover')}
              onMouseOut={() => setOnHoverIg('')}
              onFocus={() => setOnHoverIg('_hover')}
              onBlur={() => setOnHoverIg('')}
            >
              <S.IconImg src={`../static/icons/ig${onHoverIg}.png`} />
            </S.Btn>
          </S.Icon>
          <S.Icon>
            <S.Btn
              type="button"
              onClick={() => window.open('https://www.facebook.com/neeuko/', '_blank')}
              onMouseOver={() => setOnHoverFb('_hover')}
              onMouseOut={() => setOnHoverFb('')}
              onFocus={() => setOnHoverFb('_hover')}
              onBlur={() => setOnHoverFb('')}
            >
              <S.IconImg src={`../static/icons/fb${onHoverFb}.png`} />
            </S.Btn>
          </S.Icon>
        </S.HamburgerFooter>
        <S.VerticalBtn
          type="button"
          onClick={() => handleOnHamburguerClick()}
          activeBtn={activeHamburger}
        >
          {arrayOfString.map((string, index) => {
            if (string === '-') {
              return <br key={index.toString()} />;
            }
            return (
              <S.TextRotate
                key={index.toString()}
                color={activeHamburger ? Colors.black : Colors.white}>
                {string}
              </S.TextRotate>
            );
          })}
        </S.VerticalBtn>
      </S.HamburgerNav>
    </header>
  );
};

export const GridNav = () => {
  const [onHover, setOnHover] = useState('');
  const rowWidth = '750pt';
  const rowHeight = '125pt';
  const gridWidth = '734pt';
  return (
    <S.Grid>
      <S.WhiteBG width={gridWidth} />
      <S.GridContainer>
        <S.GridRow rowWidth={rowWidth} rowHeight={rowHeight}>
          <S.GridItemImg backgroundUrl="../static/images/about_01.png">
            <Link href="/about-us">
              <S.GridItemA
                onhover={onHover === 'about-us' ? 'rgba(21, 194, 202, 0.3)' : 'rgba(255, 255, 255, 0.2)'}
                onMouseOver={() => setOnHover('about-us')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('about-us')}
                onBlur={() => setOnHover('')}
              >
                ABOUT
              </S.GridItemA>
            </Link>
          </S.GridItemImg>
          <S.GridItemImg backgroundUrl="../static/images/about_02.png">
            <Link href="/about-us">
              <S.GridItemA
                onhover={onHover === 'about-us' ? 'rgba(21, 194, 202, 0.3)' : 'rgba(255, 255, 255, 0.2)'}
                onMouseOver={() => setOnHover('about-us')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('about-us')}
                onBlur={() => setOnHover('')}
              />
            </Link>
          </S.GridItemImg>
          <S.GridItem>
            <Link href="/our-work">
              <S.GridItemA
                onhover={onHover === 'our-work' ? 'rgba(21, 194, 202, 0.3)' : 'transparent'}
                onMouseOver={() => setOnHover('our-work')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('our-work')}
                onBlur={() => setOnHover('')}
              >
                OUR WORK
              </S.GridItemA>
            </Link>
          </S.GridItem>
          <S.GridItem color={Colors.black}>
            <Link href="/our-work">
              <S.GridItemA
                onhover={onHover === 'our-work' ? 'rgba(21, 194, 202, 0.3)' : 'transparent'}
                onMouseOver={() => setOnHover('our-work')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('our-work')}
                onBlur={() => setOnHover('')}
              />
            </Link>
          </S.GridItem>
          <S.GridItem color={Colors.black}>
            <Link href="/our-work">
              <S.GridItemA
                onhover={onHover === 'our-work' ? 'rgba(21, 194, 202, 0.3)' : 'transparent'}
                onMouseOver={() => setOnHover('our-work')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('our-work')}
                onBlur={() => setOnHover('')}
              />
            </Link>
          </S.GridItem>
          <S.GridItemImg backgroundUrl="../static/images/comm_01.png">
            <Link href="/community-programs">
              <S.GridItemA
                onhover={onHover === 'community-programs' ? 'rgba(21, 194, 202, 0.3)' : 'rgba(255, 255, 255, 0.2)'}
                onMouseOver={() => setOnHover('community-programs')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('community-programs')}
                onBlur={() => setOnHover('')}
              />
            </Link>
          </S.GridItemImg>
        </S.GridRow>
        <S.GridRow rowWidth={rowWidth} rowHeight={rowHeight}>
          <S.GridItem color={Colors.grey} />
          <S.GridItemImg backgroundUrl="../static/images/about_03.png">
            <Link href="/about-us">
              <S.GridItemA
                onhover={onHover === 'about-us' ? 'rgba(21, 194, 202, 0.3)' : 'rgba(255, 255, 255, 0.2)'}
                onMouseOver={() => setOnHover('about-us')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('about-us')}
                onBlur={() => setOnHover('')}
              />
            </Link>
          </S.GridItemImg>
          <S.GridItemImg backgroundUrl="../static/images/fab_01.png">
            <Link href="/fablab">
              <S.GridItemA
                onhover={onHover === 'fablab' ? 'rgba(21, 194, 202, 0.3)' : 'transparent'}
                onMouseOver={() => setOnHover('fablab')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('fablab')}
                onBlur={() => setOnHover('')}
              >
                FABLAB
              </S.GridItemA>
            </Link>
          </S.GridItemImg>
          <S.GridItemImg backgroundUrl="../static/images/fab_02.png">
            <Link href="/fablab">
              <S.GridItemA
                onhover={onHover === 'fablab' ? 'rgba(21, 194, 202, 0.3)' : 'transparent'}
                onMouseOver={() => setOnHover('fablab')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('fablab')}
                onBlur={() => setOnHover('')}
              />
            </Link>
          </S.GridItemImg>
          <S.GridItemImg backgroundUrl="../static/images/comm_02.png">
            <Link href="/community-programs">
              <S.GridItemA
                onhover={onHover === 'community-programs' ? 'rgba(21, 194, 202, 0.3)' : 'rgba(255, 255, 255, 0.2)'}
                onMouseOver={() => setOnHover('community-programs')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('community-programs')}
                onBlur={() => setOnHover('')}
              >
                COMMUNITY PROGRAMS
              </S.GridItemA>
            </Link>
          </S.GridItemImg>
          <S.GridItemImg backgroundUrl="../static/images/comm_03.png">
            <Link href="/community-programs">
              <S.GridItemA
                onhover={onHover === 'community-programs' ? 'rgba(21, 194, 202, 0.3)' : 'rgba(255, 255, 255, 0.2)'}
                onMouseOver={() => setOnHover('community-programs')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('community-programs')}
                onBlur={() => setOnHover('')}
              />
            </Link>
          </S.GridItemImg>
        </S.GridRow>
        <S.GridRow rowWidth={rowWidth} rowHeight={rowHeight}>
          <S.GridItem color={Colors.black}>
            <Link href="/education">
              <S.GridItemA
                onhover={onHover === 'education' ? 'rgba(21, 194, 202, 0.3)' : 'transparent'}
                onMouseOver={() => setOnHover('education')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('education')}
                onBlur={() => setOnHover('')}
              />
            </Link>
          </S.GridItem>
          <S.GridItem color={Colors.black}>
            <Link href="/education">
              <S.GridItemA
                onhover={onHover === 'education' ? 'rgba(21, 194, 202, 0.3)' : 'transparent'}
                onMouseOver={() => setOnHover('education')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('education')}
                onBlur={() => setOnHover('')}
              >
                EDUCATION
              </S.GridItemA>
            </Link>
          </S.GridItem>
          <S.GridItemImg backgroundUrl="../static/images/fab_03.png">
            <Link href="/fablab">
              <S.GridItemA
                onhover={onHover === 'fablab' ? 'rgba(21, 194, 202, 0.3)' : 'transparent'}
                onMouseOver={() => setOnHover('fablab')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('fablab')}
                onBlur={() => setOnHover('')}
              />
            </Link>
          </S.GridItemImg>
          <S.GridItem color={Colors.black}>
            <Link href="/events">
              <S.GridItemA
                onhover={onHover === 'events' ? 'rgba(21, 194, 202, 0.3)' : 'transparent'}
                onMouseOver={() => setOnHover('events')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('events')}
                onBlur={() => setOnHover('')}
              />
            </Link>
          </S.GridItem>
          <S.GridItem color={Colors.black}>
            <Link href="/events">
              <S.GridItemA
                onhover={onHover === 'events' ? 'rgba(21, 194, 202, 0.3)' : 'transparent'}
                onMouseOver={() => setOnHover('events')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('events')}
                onBlur={() => setOnHover('')}
              >
                EVENTS
              </S.GridItemA>
            </Link>
          </S.GridItem>
          <S.GridItemImg backgroundUrl="../static/images/comm_04.png">
            <Link href="/community-programs">
              <S.GridItemA
                onhover={onHover === 'community-programs' ? 'rgba(21, 194, 202, 0.3)' : 'rgba(255, 255, 255, 0.2)'}
                onMouseOver={() => setOnHover('community-programs')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('community-programs')}
                onBlur={() => setOnHover('')}
              />
            </Link>
          </S.GridItemImg>
        </S.GridRow>
        <S.GridRow rowWidth={rowWidth} rowHeight={rowHeight}>
          <S.GridItem color={Colors.black}>
            <Link href="/education">
              <S.GridItemA
                onhover={onHover === 'education' ? 'rgba(21, 194, 202, 0.3)' : 'transparent'}
                onMouseOver={() => setOnHover('education')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('education')}
                onBlur={() => setOnHover('')}
              />
            </Link>
          </S.GridItem>
          <S.GridItemImg backgroundUrl="../static/images/fab_04.png">
            <Link href="/fablab">
              <S.GridItemA
                onhover={onHover === 'fablab' ? 'rgba(21, 194, 202, 0.3)' : 'transparent'}
                onMouseOver={() => setOnHover('fablab')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('fablab')}
                onBlur={() => setOnHover('')}
              />
            </Link>
          </S.GridItemImg>
          <S.GridItemImg backgroundUrl="../static/images/fab_05.png">
            <Link href="/fablab">
              <S.GridItemA
                onhover={onHover === 'fablab' ? 'rgba(21, 194, 202, 0.3)' : 'transparent'}
                onMouseOver={() => setOnHover('fablab')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('fablab')}
                onBlur={() => setOnHover('')}
              />
            </Link>
          </S.GridItemImg>
          <S.GridItem color={onHover === 'request' ? Colors.blue : Colors.grey}>
            <Link href="/request">
              <S.GridItemA
                onhover={onHover === 'request' ? 'rgba(21, 194, 202, 0.3)' : 'transparent'}
                onMouseOver={() => setOnHover('request')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('request')}
                onBlur={() => setOnHover('')}
              >
                REQUEST
              </S.GridItemA>
            </Link>
          </S.GridItem>
          <S.GridItem color={Colors.black}>
            <Link href="/events">
              <S.GridItemA
                onhover={onHover === 'events' ? 'rgba(21, 194, 202, 0.3)' : 'transparent'}
                onMouseOver={() => setOnHover('events')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('events')}
                onBlur={() => setOnHover('')}
              />
            </Link>
          </S.GridItem>
          <S.GridItem color={onHover === 'contact' ? Colors.blue : Colors.red}>
            <Link href="/contact">
              <S.GridItemA
                onhover={onHover === 'contact' ? 'rgba(21, 194, 202, 0.3)' : 'transparent'}
                onMouseOver={() => setOnHover('contact')}
                onMouseOut={() => setOnHover('')}
                onFocus={() => setOnHover('contact')}
                onBlur={() => setOnHover('')}
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

export const GridMobileNav = () => (
  <S.GridMobile>
    <Link href="/about-us">
      <S.GridMobileA backgroundUrl="../static/images/about.png" filter="true">
        ABOUT
      </S.GridMobileA>
    </Link>

    <Link href="/our-work">
      <S.GridMobileA backgroundUrl="../static/images/projects.png" filter="true">
        OUR WORK
      </S.GridMobileA>
    </Link>

    <Link href="/education">
      <S.GridMobileA backgroundUrl="../static/images/design.png" filter="true">
        EDUCATION
      </S.GridMobileA>
    </Link>

    <Link href="/fablab">
      <S.GridMobileA backgroundUrl="../static/images/fab.png" filter="true">
        FABLAB
      </S.GridMobileA>
    </Link>

    <Link href="/community-programs">
      <S.GridMobileA backgroundUrl="../static/images/comm.png" filter="true">
        COMMUNITY PROGRAMS
      </S.GridMobileA>
    </Link>

    <Link href="/events">
      <S.GridMobileA
        backgroundUrl="../static/images/entrepeneurship.png"
        filter="true"
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
