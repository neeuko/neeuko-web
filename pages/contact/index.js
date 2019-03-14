import React, { useState, useEffect } from "react";

import * as A from "../../lib/animation";
import * as S from "../../lib/styles";
import { Spacing } from "../../lib/spacing";
import { H1, H2, H3, P } from "../../lib/typography";
import { Colors } from "../../lib/colors";
import Layout from "../../components/layout";
import { TitleBody } from "../../components/body-text";
import { CTA } from "../../components/buttons";

const About = () => {
  const [initialized, setInitialized] = useState(false);
  const [emailVal, setEmailVal] = useState("");
  const [subjectVal, setSubjectVal] = useState("");
  const [messageVal, setMessageVal] = useState("");

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      // add here scripts that need to be called on component will mount
    } else {
      // add here scripts that need to be called on component did update
    }
    // add here scripts that need to be called on component will unmount
    return () => {};
  });

  return (
    <Layout hamburger>
      <S.LargeContainer>
        <H1>LET'S TALK</H1>
        <div>
          <div
            style={{
              width: "50%",
              display: "inline-block",
              verticalAlign: "top",
              paddingRight: Spacing.md
            }}
          >
            <S.InputText
              placeholder="Email"
              type="text"
              value={emailVal}
              onChange={e => setEmailVal(e.target.value)}
            />
            <S.InputText
              placeholder="Subject"
              type="text"
              value={subjectVal}
              onChange={e => setSubjectVal(e.target.value)}
            />
            <S.TextArea
              placeholder="Message"
              type="text-area"
              value={messageVal}
              onChange={e => setMessageVal(e.target.value)}
            />
            <div
              style={{
                width: "100%",
                textAlign: "right",
                marginTop: Spacing.md
              }}
            >
              <CTA>SEND MESSAGE</CTA>
            </div>
          </div>
          <div
            style={{
              width: "50%",
              display: "inline-block",
              paddingLeft: Spacing.md,
              verticalAlign: "top"
            }}
          >
            <P>
              At neeuko we pride ourselves on incorporating design in every
              aspect of our decision making and production efforts. For us,
              design is not only about making, is also about thinking,
              questioning, and reinventing. Through our design courses we seek
              to inspire students to think about design as a form of
              questioning.
            </P>
          </div>
        </div>
      </S.LargeContainer>
    </Layout>
  );
};

export default About;
