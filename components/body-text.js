import React, { useState, useEffect } from "react";
import { H1, P } from "../lib/typography";

export const TitleWithBody = ({ children = "Body", title = "TITLE" }) => (
  <div>
    <H1 style={{ textAlign: "center" }}>{title}</H1>
    <P>{children}</P>
  </div>
);
