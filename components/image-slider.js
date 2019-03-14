import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import { H1, H2, A } from "../lib/typography";
import { Colors } from "../lib/colors";
import { DateTitleBody } from "../components/body-text";
import { Spacing } from "../lib/spacing";
import * as S from "../lib/styles";

export default props => {
  const [list, setList] = useState(mock);

  const rotateArrayBackwards = () => {
    let array = [...list];
    let shoppedArray = array.splice(0, 1);
    let newArray = [...array, ...shoppedArray];
    setList(newArray);
  };

  const rotateArrayForward = () => {
    let array = [...list];
    let length = array.length;
    let shoppedArray = array.splice(0, length - 1);
    let newArray = [...array, ...shoppedArray];
    setList(newArray);
  };

  return (
    <ScrollAnimation animateIn="fadeIn">
      <S.ImgSlider>
        {/* LEFT ARROW */}
        <S.ImgSliderArrow type="button" onClick={() => rotateArrayBackwards()}>
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
        <S.ImgSliderArrow
          type="button"
          right
          onClick={() => rotateArrayForward()}
        >
          <img src="../static/icons/arrow.png" width="20pt" />
        </S.ImgSliderArrow>
      </S.ImgSlider>

      <DateTitleBody
        date={list && list[0].date}
        title={list && list[0].title}
        width="554pt"
      >
        {list && list[0].body}
      </DateTitleBody>
    </ScrollAnimation>
  );
};

const mock = [
  {
    date: "February 17, 2016",
    title:
      "Sagrado opens the first center of collaborative innovation in Puerto Rico",
    body:
      "Sagrado Corazón inaugurates the first collaborative innovation center in Puerto Rico where you can develop and execute your idea all in one place."
  },
  {
    date: "date",
    title: "title",
    body: "body"
  },
  {
    date: "date",
    title: "title",
    body: "body"
  }
];
