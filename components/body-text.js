import React, { useState, useEffect } from "react";

import { H1, H2, H3, H4, P } from "../lib/typography";
import { Colors } from "../lib/colors";
import { Spacing } from "../lib/spacing";
import * as A from "../lib/animation";
import * as S from "../lib/styles";

export const TitleBody = ({ title = "Title", children = "Body" }) => (
  <S.TitleBody>
    <H2 style={{ marginBottom: Spacing.md }}>{title}</H2>
    <P>{children}</P>
  </S.TitleBody>
);

export const DateTitleBody = ({
  date = "Date",
  title = "Title",
  children = "Body",
  width
}) => (
  <S.DateTitleBody width={width}>
    <H4>{date}</H4>
    <H2 style={{ marginBottom: Spacing.sm }}>{title}</H2>
    <P>{children}</P>
  </S.DateTitleBody>
);

export const ImgTitleBody = ({
  title = "Title",
  children = "Body",
  active = false,
  imgUrl = "../static/images/icon.png"
}) => (
  <S.ImgTitleBody>
    <S.ImgTitleBodyImg src={imgUrl} width="119pt" active={active} />
    <H3>{title}</H3>
    <P>{children}</P>
  </S.ImgTitleBody>
);

export const TitleListSideImg = ({
  title = "Title",
  children = "Body",
  imgUrl = "../static/images/icon.png"
}) => (
  <S.TitleListSideImg>
    <H4>{title}</H4>
    <P
      style={{
        padding: "10pt",
        margin: "0",
        border: `1pt solid ${Colors.blue}`,
        display: "inline-block"
      }}
    >
      {children}
    </P>
    <div
      style={{
        display: "inline-block",
        position: "absolute",
        width: "50%",
        height: "100%",
        right: "0"
      }}
    >
      <img src={imgUrl} width="260pt" />
    </div>
  </S.TitleListSideImg>
);

export const TitleSubtitleBodySideImg = ({
  title = "Title",
  children = "Body",
  subtitle = "Subtitle",
  imgUrl = "../static/images/icon.png",
  active = false
}) => (
  <div
    style={{
      width: "100%",
      position: "relative",
      height: "260pt"
    }}
  >
    <div
      style={{
        width: "80%",
        height: "100%",
        margin: "auto",
        position: "relative"
      }}
    >
      <div
        style={{
          display: "inline-block",
          width: "60%",
          height: "100%",
          position: "absolute",
          left: "0"
        }}
      >
        <H2>{title}</H2>
        <H4>{subtitle}</H4>
        <P>{children}</P>
      </div>
      <div
        style={{
          display: "inline-block",
          position: "absolute",
          width: "40%",
          height: "100%",
          right: "0"
        }}
      >
        <img
          src={imgUrl}
          width="260pt"
          style={{
            marginLeft: "20pt"
          }}
        />
      </div>
    </div>
  </div>
);
