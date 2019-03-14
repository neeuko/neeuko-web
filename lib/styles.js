import styled from "styled-components";
import Link from "next/link";

import { Colors } from "./colors";
import { H1, H2, A } from "./typography";
import { Spacing } from "./spacing";

export const CTA = styled.button`
  background-color: ${Colors.blue};
  border: none;
  cursor: pointer;
  transition: 0.35s;
  &:hover {
    background-color: ${Colors.hover};
  }
`;

export const Grid = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: table;
  background-color: ${Colors.black};
`;

export const GridContainer = styled.div`
  height: calc(${props => props.rowHeight || "150pt"} x 4 + 6pt);
  display: table-cell;
  vertical-align: middle;
`;

export const GridRow = styled.div`
  width: ${props => props.rowWidth || "900pt"};
  height: ${props => props.rowHeight || "150pt"};
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
  transition: 0.35s;
`;

export const GridItemImg = styled(GridItem)`
  background: url(${props => props.backgroundUrl || ""});
  background-size: cover;
  background-position: center;
`;

export const GridItemA = styled(A)`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props =>
    props.onHover ? "rgba(21, 194, 202, 0.3);" : "transparent"}
  cursor: pointer;
  border: none;
  color: ${Colors.white};
  padding-top: 40%;
  transition: 0.35s;
`;

export const GridItemAWhite = styled(GridItemA)`
  background-color: ${props =>
    props.onHover ? "rgba(21, 194, 202, 0.3);" : "rgba(255, 255, 255, 0.2)"};
`;

export const LogoBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.white};
  opacity: ${props => (!props.intro ? "1" : "0")};
  transition: 1.5s;
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
  opacity: ${props => (!props.intro ? "1" : "0")};
`;

export const WhiteBG = styled.div`
  background-color: ${Colors.white};
  width: ${props => props.width};
  height: 610pt;
  position: fixed;
  left: calc(50% - ${props => props.width} / 2);
  top: calc(50% - 612pt / 2);
`;

// HAMBURGER MENU

export const HamburgerBG = styled.button`
  background-color: ${Colors.grey};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  opacity: ${props => (props.activeDarkBackground ? "0.5" : "0")};
  transition: ${props => props.transition};
  z-index: ${props => (props.activeDarkBackground ? "10" : "-1")};
`;

export const HamburgerNav = styled.nav`
  position: fixed;
  left: ${props => (props.activeHamburger ? "0" : "-300pt")};
  background-color: ${Colors.black};
  height: 100%;
  width: 300pt;
  transition: ${props => props.transition};
  z-index: 11;
  padding-left: 60pt;
`;

export const HamburgerA = styled(A)`
  display: block;
  margin: 20pt 0;
  &:hover {
    color: ${Colors.hover};
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

export const TitleBody = styled.div`
  width: 240pt;
  display: inline-block;
  position: relative;
  margin-left: ${props => props.marginLeft || "0"};
  margin-bottom: ${Spacing.md};
  vertical-align: top;
`;

export const DateTitleBody = styled.div`
  width: ${props => props.width || "100%"};
  margin: auto;
  margin-bottom: ${Spacing.xl};
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
  width: 800pt;
  position: relative;
  margin: auto;
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
  transform: ${props => (props.right ? "scaleX(-1)" : "scaleX(1)")};
`;

export const GridCard = styled.div`
  display: inline-block;
  width: ${props => (props.corner ? "193pt" : "188pt")};
  margin: ${props => props.margin};
  margin-bottom: ${Spacing.sm};
`;

export const GridCardImg = styled.img`
  background-color: transparent;
  width: ${props => (props.corner ? "193pt" : "188pt")};
  height: 188pt;
  border: 1pt solid ${Colors.black};
  margin-bottom: ${Spacing.sm};
`;

export const GridLargeCard = styled(GridCard)`
  width: 254pt;
  margin: ${props => props.margin};
  margin-bottom: ${Spacing.lg};
`;

export const GridLargeCardImg = styled(GridCardImg)`
  width: 250pt;
  height: 250pt;
  border: 1pt solid ${Colors.black};
`;

export const RegularBtn = styled(CTA)`
  width: 100%;
`;

export const InputText = styled.input`
  width: 100%;
  border: 1pt solid ${Colors.black};
  position: relative;
  margin-bottom: ${Spacing.md};
`;

export const TextArea = styled.input`
  width: 100%;
  border: 1pt solid ${Colors.black};
  position: relative;
  height: 150pt;
`;
