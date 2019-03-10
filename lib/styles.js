import { Colors } from "../lib/colors";
import styled from "styled-components";

export const CTA = styled.button`
  background-color: ${Colors.blue};
  border: none;
  cursor: pointer;
  transition: 0.35s;

  &:hover {
    background-color: ${Colors.hover};
  }
`;
