import React, { useState, useEffect } from "react";
import { H1, H2, H3, H4, H5, P } from "../lib/typography";

export const TitleBody = ({ children = "Body", title = "TITLE" }) => (
  <div>
    <H3 style={{ textAlign: "center" }}>{title}</H3>
    <P>{children}</P>
  </div>
);

export const DateTitleBody = ({
  children = "Body",
  title = "TITLE",
  date = "Date"
}) => (
  <div>
    <H5 style={{ textAlign: "left" }}>{date}</H5>
    <H4 style={{ textAlign: "left" }}>{title}</H4>
    <P>{children}</P>
  </div>
);

// export const TitleOrderedBody = ({ children = "Body", title = "TITLE", })
