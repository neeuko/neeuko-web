import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import * as S from '../lib/styles';
import Colors from '../lib/colors';

const mock = [
  {
    date: 'February 17, 2016',
    title:
      'Sagrado opens the first center of collaborative innovation in Puerto Rico',
    body:
      'Sagrado Corazón inaugurates the first collaborative innovation center in Puerto Rico where you can develop and execute your idea all in one place.',
  },
  {
    date: 'date',
    title: 'title',
    body: 'body',
  },
  {
    date: 'date',
    title: 'title',
    body: 'body',
  },
];

export default () => {
  const [list, setList] = useState(mock);

  const rotateArrayBackwards = () => {
    const array = [...list];
    const shoppedArray = array.splice(0, 1);
    const newArray = [...array, ...shoppedArray];
    setList(newArray);
  };

  const rotateArrayForward = () => {
    const array = [...list];
    const length = array.length;
    const shoppedArray = array.splice(0, length - 1);
    const newArray = [...array, ...shoppedArray];
    setList(newArray);
  };

  return (
    <ScrollAnimation animateIn="fadeIn">
      <S.ImgSlider>
        {/* LEFT ARROW */}
        <S.ImgSliderArrow type="button" onClick={() => rotateArrayBackwards()}>
          <img src="../static/icons/arrow.png" width="20pt" alt="arrow" />
        </S.ImgSliderArrow>
        <S.ImgSliderImg src="" margin="0 0 0 10pt" hide />
        <S.ImgSliderImg
          src=""
          width="180pt"
          height="180pt"
          margin="0 10pt"
          border={`2pt solid ${Colors.blue}`}
        />
        <S.ImgSliderImg src="" margin="0 10pt 0 0" hide />
        {/* RIGHT ARROW */}
        <S.ImgSliderArrow
          type="button"
          right
          onClick={() => rotateArrayForward()}
        >
          <img src="../static/icons/arrow.png" width="20pt" alt="arrow" />
        </S.ImgSliderArrow>
      </S.ImgSlider>

      {/* <DateTitleBody
        date={list && list[0].date}
        title={list && list[0].title}
        width="554pt"
      >
        {list && list[0].body}
      </DateTitleBody> */}
    </ScrollAnimation>
  );
};
