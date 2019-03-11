import styled from "styled-components";
import { Colors } from "./colors";
import { H1, H2, A } from "./typography";
import Link from "next/link";

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
