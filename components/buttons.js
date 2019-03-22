import * as S from "../lib/styles";
import React, { useState, useEffect } from "react";
import { H1, H2 } from "../lib/typography";
import { Colors } from "../lib/colors";

export const CTA = props => (
  <S.CTA type="button" onClick={props.onClick}>
    <H2
      style={{ padding: "5pt 20pt", margin: "0", textAlign: "center" }}
      color={Colors.white}
    >
      {props.children}
    </H2>
  </S.CTA>
);

export const RegularBtn = props => (
  <S.RegularBtn type="button" onClick={props.onClick}>
    <H2
      style={{ padding: "5pt 20pt", margin: "0", textAlign: "center" }}
      color={Colors.white}
    >
      {props.children}
    </H2>
  </S.RegularBtn>
);
