import React, { useState, useEffect } from "react";
import { H1, H2, H3, H4, H5, H6, P } from "../lib/typography";
import { Colors } from "../lib/colors";
import { blue } from "ansi-colors";

export const TitleBody = ({
  children = "Body",
  display = "inline-block",
  margin = "auto",
  padding = "auto",
  position = "relative",
  textAlign = "center",
  title = "TITLE",
  verticalAlign = "top"
}) => (
  <div
    style={{
      display: display,
      position: position,
      margin: margin,
      verticalAlign: verticalAlign,
      padding: padding
    }}
  >
    <H4 style={{ textAlign: textAlign }}>{title}</H4>
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
    <H6 style={{ marginBottom: marginBottom, lineHeight: lineHeight }}>
      {date}
    </H6>
    <H5>{title}</H5>
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
        marign="5% auto 2%"
        width="119pt"
        style={{
          border: `1pt solid ${active ? Colors.blue : Colors.black}`
        }}
      />
    </div>
    <H4 style={{ textAlign: textAlign }}>{title}</H4>
    <P>{children}</P>
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
        <H4 style={{ textAlign: textAlign }}>{title}</H4>
        <H6 style={{ textAlign: textAlign }}>{subtitle}</H6>
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
