import React, { useState, useEffect } from "react";
import { H2 } from "../lib/typography";
import { Colors } from "../lib/colors";

export const VerticalBtn = ({ text, onClick, activeBtn, transition }) => {
  const [initialized, setInitialized] = useState(false);
  const [arrayOfString, setArrayOfString] = useState([]);

  const stringToUpperCaseSplit = string => {
    let stringToUpperCase = string.toUpperCase();
    let stringToArray = stringToUpperCase.split("");
    return stringToArray;
  };

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      // add here scripts that need to be called on component will mount
    } else {
      setArrayOfString(stringToUpperCaseSplit(text));
    }
    // add here scripts that need to be called on component will unmount
    return () => {};
  });

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        height: "100%",
        width: "34pt",
        backgroundColor: activeBtn ? Colors.white : Colors.black,
        position: "fixed",
        cursor: "pointer",
        left: "0",
        top: "0",
        border: "none",
        transition: transition,
        zIndex: "11"
      }}
    >
      {arrayOfString.map((string, index) => {
        if (string === "-") {
          return <br />;
        } else {
          return (
            <H2
              key={index}
              color={activeBtn ? Colors.black : Colors.white}
              style={{
                transform: "rotate(90deg)",
                width: "14pt",
                margin: "-9.3pt",
                position: "relative",
                left: "12pt"
              }}
            >
              {string}
            </H2>
          );
        }
      })}
    </button>
  );
};
