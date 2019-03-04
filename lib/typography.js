import styled from "styled-components";
import { Colors } from "./colors";
import { Spacing } from "./spacing";

export const H1 = styled.h1`
  font-size: 2rem;
  font-family: "Fjalla One", sans-serif;
  font-weight: 400;
  color: ${props => props.color || Colors.black};
`;

export const H2 = styled.h2`
  font-size: 1.6rem;
  font-family: "Fjalla One", sans-serif;
  font-weight: 400;
  color: ${props => props.color || Colors.black};
  margin: ${Spacing.xs} 0;
`;

export const H3 = styled.h3`
  font-size: 1.3rem;
  font-family: "Fjalla One", sans-serif;
  font-weight: 400;
  color: ${props => props.color || Colors.black};
`;

export const H4 = styled.h4`
  font-size: 1rem;
  font-family: "Fjalla One", sans-serif;
  font-weight: 400;
  color: ${props => props.color || Colors.black};
`;

export const P = styled.p`
  font-size: 1rem;
  font-family: “Nunito”, sans-serif;
  font-weight: 400;
  color: ${props => props.color || Colors.black};
`;

export const A = styled.a`
  font-size: 2rem;
  font-family: "Fjalla One", sans-serif;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.color || Colors.black};
`;
