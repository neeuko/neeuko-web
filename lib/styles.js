import styled from 'styled-components';

import Colors from './colors';
import { H1, A } from './typography';
import Spacing from './spacing';
import Transitions from './transitions';

export const CTA = styled.button`
  background-color: ${Colors.blue};
  border: none;
  cursor: pointer;
  transition: ${Transitions.fastest};
  width: 100%;
  &:hover {
    background-color: ${Colors.hover};
  }
  @media only screen and (min-width: 768px) {
    width: auto;
  }
`;

export const BtnContainer = styled.div`
  margin-top: ${Spacing.md};
  width: 100%;
  margin-bottom: ${Spacing.lg};

  @media only screen and (min-width: 768px) {
    width: auto;
    float: right;
  }
`;

export const Grid = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: none;
  background-color: ${Colors.black};
  display: none;

  @media only screen and (min-width: 768px) {
    display: table;
  }
`;

export const GridMobile = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const GridMobileA = styled(A)`
  width: calc(100% - 20pt);
  position: relative;
  margin: auto;
  height: 100pt;
  border: 2pt solid ${Colors.black};
  margin-bottom: ${Spacing.xs};
  text-align: center;
  cursor: pointer;
  color: ${Colors.white};
  transition: ${Transitions.fast};
  font-size: 1.6rem;
  display: block;
  padding-top: 13%;
  filter: ${props => (props.filter ? 'grayscale(100%)' : 'none')};
  background: url(${props => props.backgroundUrl || ''});
  background-color: ${props => props.color || Colors.black};
  background-size: cover;
  background-position: center;

  &:hover {
    color: ${Colors.hover};
    filter: none;
  }
`;

export const GridContainer = styled.div`
  height: calc(${props => props.rowHeight || '150pt'} x 4 + 6pt);
  display: table-cell;
  vertical-align: middle;
`;

export const GridRow = styled.div`
  width: ${props => props.rowWidth || '900pt'};
  height: ${props => props.rowHeight || '150pt'};
  position: relative;
  margin: auto;
  text-align: center;
  margin-bottom: 2pt;
`;

export const GridItem = styled.div`
  position: relative;
  width: 16%;
  height: 100%;
  display: inline-block;
  background-color: ${props => props.color || Colors.black};
  text-align: center;
  margin: 0 1pt;
  transition: ${Transitions.fast};
`;

export const GridItemImg = styled(GridItem)`
  background: url(${props => props.backgroundUrl || ''});
  background-size: cover;
  background-position: center;
`;

export const GridItemA = styled(A)`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.onhover};
  cursor: pointer;
  border: none;
  color: ${Colors.white};
  padding-top: 40%;
  transition: ${Transitions.fast};
`;

export const LogoBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.white};
  opacity: ${props => (!props.intro ? '1' : '0')};
  transition: ${Transitions.slow}};
  z-index: 2;
  text-align: center;
  display: table;
`;

export const Logo = styled(H1)`
  position: relative;
  margin: auto;
  width: 100%;
  color: ${Colors.black};
  display: table-cell;
  vertical-align: middle;
  transition: 1.5s;
  opacity: ${props => (!props.intro ? '1' : '0')};
`;

export const WhiteBG = styled.div`
  background-color: ${Colors.white};
  width: ${props => props.width};
  height: 510pt;
  position: fixed;
  left: calc(50% - 367pt);
  top: calc(50% - 256pt);
`;

// HAMBURGER MENU

export const HamburgerBG = styled.button`
  background-color: ${Colors.grey};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  opacity: ${props => (props.activeDarkBackground ? '0.5' : '0')};
  transition: ${Transitions.fast};
  z-index: ${props => (props.activeDarkBackground ? '10' : '-1')};
`;

export const HamburgerNav = styled.nav`
  position: fixed;
  left: ${props => (props.activeHamburger ? '0' : '-100%')};
  background-color: ${Colors.black};
  height: 100%;
  width: 100%;
  transition: ${Transitions.fast};
  z-index: 11;
  padding-left: 60pt;

  @media only screen and (min-width: 768px) {
    left: ${props => (props.activeHamburger ? '0' : '-300pt')};
    width: 300pt;
  }
`;

export const HamburgerA = styled(A)`
  display: block;
  margin: ${Spacing.sm} 0;
  &:hover {
    color: ${Colors.hover};
  }
`;

export const HamburgerLogo = styled.img`
  width: 70pt;

  @media only screen and (min-width: 768px) {
    width: 120pt;
  }
`;

export const HamburgerPages = styled.div`
  height: 226pt;
  position: absolute;
  top: calc(45% - 113pt);

  @media only screen and (min-width: 768px) {
    height: 254pt;
    top: calc(46% - 127pt);
  }
`;

export const VerticalBtn = styled.button`
  height: 100%;
  width: 30pt;
  background-color: ${props => (props.activeBtn ? Colors.white : Colors.black)};
  position: fixed;
  cursor: pointer;
  left: 0;
  top: 0;
  border: none;
  transition: ${Transitions.fast};
  z-index: 11;

  @media only screen and (min-width: 768px) {
    width: 34pt;
  }
`;

export const Btn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Icon = styled.div`
  display: inline-block;
`;

export const IconImg = styled.img`
  width: 26pt;

  @media only screen and (min-width: 768px) {
    width: 30pt;
  }
`;

export const TitleBody = styled.div`
  width: 100%;
  position: relative;
  margin-left: 0;
  margin-bottom: ${Spacing.md};

  @media only screen and (min-width: 768px) {
    width: ${props => props.width || '240pt'};
    display: inline-block;
    vertical-align: top;
    margin-left: ${props => props.marginLeft || '0'};
  }
`;

export const DateTitleBody = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom: ${Spacing.xl};

  @media only screen and (min-width: 768px) {
    width: ${props => props.width || '100%'};
  }
`;

export const ImgTitleBody = styled.div`
  position: relative;
`;

export const ImgTitleBodyImg = styled.img`
  border: 1pt solid ${props => (props.active ? Colors.blue : Colors.black)};
  margin: ${Spacing.sm};
`;

export const TitleListSideImg = styled.div`
  width: 100%;
`;

export const LargeContainer = styled.div`
  width: 100%;
  position: relative;
  margin: auto;

  @media only screen and (min-width: 768px) {
    width: 800pt;
  }
`;

export const MediumContainer = styled.div`
  width: 600pt;
  position: relative;
  margin: auto;
`;

export const SmallContainer = styled.div`
  width: 400pt;
  position: relative;
  margin: auto;
`;

export const ImgSlider = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: ${Spacing.md};
`;

export const ImgSliderArrow = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  position: relative;
  bottom: 50pt;
  transform: ${props => (props.right ? 'scaleX(-1)' : 'scaleX(1)')};
`;

export const GridCard = styled.div`
  width: ${props => (props.corner ? '193pt' : '188pt')};
  margin: auto;
  margin-bottom: ${Spacing.sm};

  @media only screen and (min-width: 768px) {
    display: inline-block;
    margin: ${props => props.margin};
  }
`;

export const GridCardImg = styled.img`
  background-color: transparent;
  width: ${props => (props.corner ? '193pt' : '188pt')};
  height: 188pt;
  border: 1pt solid ${Colors.black};
  margin-bottom: ${Spacing.sm};
`;

export const GridLargeCard = styled(GridCard)`
  width: 100%;
  margin-bottom: ${Spacing.lg};

  @media only screen and (min-width: 768px) {
    width: 254pt;
    margin: ${props => props.margin};
    vertical-align: top;
    display: inline-block;
  }
`;

export const GridLargeCardImg = styled(GridCardImg)`
  width: 100%;
  height: 200pt;
  border: 1pt solid ${Colors.black};
  object-fit: cover;

  @media only screen and (min-width: 768px) {
    width: 250pt;
    height: 250pt;
  }
`;

export const RegularBtn = styled(CTA)`
  width: 100%;
`;

export const InputText = styled.input`
  width: ${props => props.width || '100%'};
  border: 1pt solid ${Colors.black};
  position: relative;
  font-size: 0.8rem;
  font-family: “Nunito”, sans-serif;
  font-weight: 400;
  padding: 5pt;
  vertical-align: top;
  height: 24pt;
  margin-bottom: ${Spacing.sm};

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
    height: 28pt;
  }
`;

export const InputTextSubmit = styled.button`
  background-color: ${Colors.blue};
  display: inline-block;
  width: ${props => props.width || '100%'};
  height: 24pt;
  border: none;
  font-size: 1rem;
  font-family: “Nunito”, sans-serif;
  font-weight: 400;
  padding: 5pt;
  vertical-align: top;
  transition: ${Transitions.fast};

  &:hover {
    background-color: ${Colors.hover};
  }

  @media only screen and (min-width: 768px) {
    height: 28pt;
  }
`;

export const InputTextSubmitImg = styled.img`
  width: 16pt;
  margin: 0;
  position: relative;
  bottom: 0;

  @media only screen and (min-width: 768px) {
    width: 24pt;
    position: relative;
    bottom: 2.5pt;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 1pt solid ${Colors.black};
  position: relative;
  height: 100pt;
  font-size: 1rem;
  font-family: “Nunito”, sans-serif;
  font-weight: 400;
  padding: 5pt;
`;

export const LeftBlock = styled.div`
  width: 100%;
  margin-bottom: ${Spacing.sm};

  @media only screen and (min-width: 768px) {
    width: 50%;
    padding-right: ${Spacing.md};
    display: inline-block;
    vertical-align: top;
    margin-bottom: ${Spacing.lg};
  }
`;

export const RightBlock = styled.div`
  width: 100%;
  margin-bottom: ${Spacing.sm};

  @media only screen and (min-width: 768px) {
    width: 50%;
    padding-left: ${Spacing.md};
    display: inline-block;
    vertical-align: top;
    margin-bottom: ${Spacing.lg};
  }
`;

export const Map = styled.iframe`
  width: 100%;
  height: 160pt;
  border: 1pt solid ${Colors.black};
`;

export const HamburgerFooter = styled.div`
  height: 120pt;
  position: absolute;
  bottom: 0;
`;

export const LayoutChildren = styled.div`
  width: ${props => (props.hamburger ? 'calc(100% - 50pt)' : '100%')};
  padding: ${props => (props.hamburger ? Spacing.lg : '0')} 0;
  position: absolute;
  left: ${props => (props.hamburger ? '40pt' : '0')};
  top: 0;

  @media only screen and (min-width: 768px) {
    padding: ${Spacing.xl} 0;
    width: calc(100% - 54pt);
    left: 44pt;
  }
`;

export const ImgSliderImg = styled.img`
  width: 160pt;
  height: 160pt;
  background-color: ${Colors.grey};
  border: 2pt solid ${Colors.blue};
  display: ${props => (props.hide ? 'none' : 'block')};
  margin-bottom: 0;
  @media only screen and (min-width: 768px) {
    width: ${props => props.width || '176pt'};
    height: ${props => props.height || '176pt'};
    display: inline-block;
    margin: ${props => props.margin};
    border: ${props => props.border || 'none'};
  }
`;

export const LogoImg = styled.img`
  width: 140pt;

  @media only screen and (min-width: 768px) {
    width: 260pt;
  }
`;

export const IframeWeb = styled.iframe`
  width: calc(100% - 30pt);
  height: 100%;
  margin: 0;
  border: none;
  position: fixed;
  left: 30pt;
  top: 0;

  @media only screen and (min-width: 768px) {
    width: calc(100% - 34pt);
    left: 34pt;
  }
`;

export const WideImg = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: ${Spacing.md};
  position: relative;
  left: 0;
  object-fit: cover;

  @media only screen and (min-width: 768px) {
    height: ${props => props.height || 'auto'};
    width: ${props => props.width || '100%'};
  }
`;
