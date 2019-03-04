import React, { useState, useEffect } from "react";
import { H1, H2, A } from "../lib/typography";
import { Colors } from "../lib/colors";
import { DateTitleBody } from "../components/body-text";
import { Spacing } from "../lib/spacing";

export const ThreeImage = props => {
  return (
    <div
      style={{
        textAlign: "center",
        position: "relative",
        marginBottom: Spacing.md
      }}
    >
      <button
        type="button"
        style={{
          cursor: "pointer",
          border: "none",
          backgroundColor: "transparent",
          position: "relative",
          left: "-25pt",
          bottom: "50pt"
        }}
      >
        <img src="../static/icons/arrow.png" width="20pt" />
      </button>
      <img
        src=""
        style={{
          width: "176pt",
          height: "176pt",
          backgroundColor: "grey",
          display: "inline-block",
          margin: "0 5pt"
        }}
      />
      <img
        src=""
        style={{
          width: "180pt",
          height: "180pt",
          backgroundColor: "grey",
          display: "inline-block",
          margin: "0 5pt",
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
          margin: "0 5pt"
        }}
      />
      <button
        type="button"
        style={{
          cursor: "pointer",
          border: "none",
          backgroundColor: "transparent",
          position: "relative",
          left: "50pt",
          bottom: "50pt",
          webkitTransform: "scaleX(-1)",
          transform: "scaleX(-1)"
        }}
      >
        <img src="../static/icons/arrow.png" width="20pt" />
      </button>
    </div>
  );
};
