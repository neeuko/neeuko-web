import React, { useState, useEffect } from "react";
import { H1, H2, H3, H4, P } from "../lib/typography";
import { Colors } from "../lib/colors";
import { Spacing } from "../lib/spacing";

export const TitleBody = ({
  children = "Body",
  textAlign = "center",
  title = "TITLE",
  verticalAlign = "top"
}) => (
  <div
    style={{
      marginBottom: Spacing.lg,
      verticalAlign: verticalAlign,
      width: "300pt",
      margin: "20pt"
    }}
  >
    <H2 style={{ textAlign: textAlign, marginBottom: Spacing.md }}>{title}</H2>
    <P>{children}</P>
  </div>
);

export const DateTitleBody = ({
  children = "Body",
  date = "Date",
  lineHeight = "2",
  margin = "auto",
  marginBottom = "0%",
  marginTop = "0%",
  title = "TITLE",
  width = "70%"
}) => (
  <div
    style={{
      width: width,
      margin: margin,
      marginBottom: marginBottom,
      marginTop: marginTop
    }}
  >
    <H4 style={{ marginBottom: marginBottom, lineHeight: lineHeight }}>
      {date}
    </H4>
    <H2>{title}</H2>
    <P style={{ marginBottom: marginBottom }}>{children}</P>
  </div>
);

export const ImgTitleBody = ({
  active = false,
  children = "Body",
  display = "inline-block",
  imgUrl = "../static/images/icon.png",
  margin = "auto",
  padding = "auto",
  position = "relative",
  title = "TITLE",
  textAlign = "center",
  width = "100%"
}) => (
  <div
    style={{
      display: display,
      margin: margin,
      padding: padding,
      position: position,
      width: width
    }}
  >
    <div style={{ textAlign: "center" }}>
      <img
        src={imgUrl}
        width="119pt"
        style={{
          border: `1pt solid ${active ? Colors.blue : Colors.black}`,
          margin: Spacing.sm
        }}
      />
    </div>
    <H3 style={{ textAlign: textAlign }}>{title}</H3>
    <P>{children}</P>
  </div>
);

export const TitleListSideImg = ({
  imgUrl = "../static/images/icon.png",
  children = "Body",
  title = "TITLE",
  display = "inlne-block",
  position = "relative"
}) => (
  <div
    style={{
      width: "100%",
      position: position
    }}
  >
    <div
      style={{
        margin: "auto",
        width: "80%",
        position: "relative"
      }}
    />
    <div>
      <div
        style={{
          display: display,
          width: "50%",
          position: "absolute",
          left: "0",
          textAlign: "left",
          padding: "15pt"
        }}
      >
        <H4>{title}</H4>
        <P
          style={{
            padding: "10pt",
            margin: "0",
            border: `1pt solid ${Colors.blue}`
          }}
        >
          {children}
        </P>
      </div>
    </div>
    <div
      style={{
        display: "inline-block",
        position: "absolute",
        width: "50%",
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
);

export const TitleSubtitleBodySideImg = ({
  imgUrl = "../static/images/icon.png",
  children = "Body",
  title = "TITLE",
  subtitle = "SUBTITLE",
  textAlign = "left",
  position = "relative",
  margin = "auto",
  active = false
}) => (
  <div
    style={{
      width: "100%",
      position: position,
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
        <H2 style={{ textAlign: textAlign }}>{title}</H2>
        <H4 style={{ textAlign: textAlign }}>{subtitle}</H4>
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
