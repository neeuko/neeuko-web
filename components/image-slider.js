import React, { useState, useEffect } from "react";
import { H1, H2, A } from "../lib/typography";
import { Colors } from "../lib/colors";
import { DateTitleBody } from "../components/body-text";
import { Spacing } from "../lib/spacing";
import * as S from "../lib/styles";

export default props => {
  return (
    <S.ImgSlider>
      {/* LEFT ARROW */}
      <S.ImgSliderArrow type="button">
        <img src="../static/icons/arrow.png" width="20pt" />
      </S.ImgSliderArrow>
      <img
        src=""
        style={{
          width: "176pt",
          height: "176pt",
          backgroundColor: "grey",
          display: "inline-block",
          border: "none",
          margin: "0 0 0 10pt"
        }}
      />
      <img
        src=""
        style={{
          width: "180pt",
          height: "180pt",
          backgroundColor: "grey",
          display: "inline-block",
          margin: "0 10pt",
          border: `2pt solid ${Colors.blue}`
        }}
      />
      <img
        src=""
        style={{
          width: "176pt",
          height: "176pt",
          backgroundColor: "grey",
          display: "inline-block",
          border: "none",
          margin: "0 10pt 0 0"
        }}
      />
      {/* RIGHT ARROW */}
      <S.ImgSliderArrow type="button" right>
        <img src="../static/icons/arrow.png" width="20pt" />
      </S.ImgSliderArrow>
    </S.ImgSlider>
  );
};
