import React, { useState, useEffect } from "react";
import { H1, H2, A } from "../lib/typography";
import { Colors } from "../lib/colors";
import { DateTitleBody } from "../components/body-text";

export const ThreeImage = props => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center"
      }}
    >
      <img
        src="../static/icons/arrow.png"
        width="20pt"
        style={{
          position: "relative",
          left: "-25pt",
          bottom: "50pt"
        }}
      />
      <div
        style={{
          width: "160pt",
          height: "160pt",
          backgroundColor: "grey",
          display: "inline-block",
          margin: "0 5pt"
        }}
      />
      <div
        style={{
          width: "164pt",
          height: "164pt",
          backgroundColor: "grey",
          display: "inline-block",
          margin: "0 5pt",
          border: `2pt solid ${Colors.blue}`
        }}
      />
      <div
        style={{
          width: "160pt",
          height: "160pt",
          backgroundColor: "grey",
          display: "inline-block",
          margin: "0 5pt"
        }}
      />
      <img
        src="../static/icons/arrow.png"
        width="20pt"
        style={{
          position: "relative",
          left: "25pt",
          bottom: "50pt",
          webkitTransform: "scaleX(-1)",
          transform: "scaleX(-1)"
        }}
      />
      <div
        style={{
          width: "50%",
          margin: "auto",
          marginTop: "30pt",
          textAlign: "left"
        }}
      >
        <DateTitleBody
          date="February 17, 2016"
          title="Sagrado opens the first center of collaborative innovation in Puerto Rico"
        >
          Sagrado Corazón inaugurates the first collaborative innovation center
          in Puerto Rico where you can develop and execute your idea all in one
          place.
        </DateTitleBody>
      </div>
    </div>
  );
};
