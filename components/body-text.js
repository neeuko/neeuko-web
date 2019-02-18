import React, { useState, useEffect } from "react";
import { H1, H2, H3, H4, P } from "../lib/typography";

export const TitleBody = ({ children = "Body", title = "TITLE" }) => (
  <div>
    <H2 style={{ textAlign: "center" }}>{title}</H2>
    <P>{children}</P>
  </div>
);

export const DateTitleBody = ({
  children = "Body",
  title = "TITLE",
  date = "Date"
}) => (
  <div>
    <H4 style={{ textAlign: "right" }}>{date}</H4>
    <H3 style={{ textAlign: "center" }}>{title}</H3>
    <P>{children}</P>
  </div>
);
