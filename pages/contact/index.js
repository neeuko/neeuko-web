import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

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
    }
  });

  return (
    <Layout hamburger>
      <S.LargeContainer>
        <ScrollAnimation animateIn="fadeIn">
          <H1>LET'S TALK</H1>
          <S.LeftBlock>
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
            <div style={{ float: "right", marginTop: Spacing.md }}>
              <CTA
                onClick={() => {
                  setEmailVal("");
                  setSubjectVal("");
                  setMessageVal("");
                }}
              >
                SEND MESSAGE
              </CTA>
            </div>
          </S.LeftBlock>
          <S.RightBlock>
            <P>
              At neeuko we pride ourselves on incorporating design in every
              aspect of our decision making and production efforts. For us,
              design is not only about making, is also about thinking,
              questioning, and reinventing. Through our design courses we seek
              to inspire students to think about design as a form of
              questioning.
            </P>
          </S.RightBlock>

          {/* MAP */}

          <S.LeftBlock width="64%" marginBottom="0">
            <S.Map src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1892.4570432014812!2d-66.06042086644761!3d18.442209545963106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8c0368b2c85ecc9f%3A0xc3c29d438c23ee65!2sSagrado+Coraz%C3%B3n+%2F+Monteflores%2C+San+Juan!3m2!1d18.4425939!2d-66.0589925!5e0!3m2!1sen!2spr!4v1552539828795" />
          </S.LeftBlock>
          <S.RightBlock width="36%" marginBottom="0">
            <H1>OUR LOCATION</H1>
            <P>
              463, 413 Calle Bouret, <br />
              San Juan, 00912
            </P>
          </S.RightBlock>
        </ScrollAnimation>
      </S.LargeContainer>
    </Layout>
  );
};

export default About;
