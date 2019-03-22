import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import firebase from "../../lib/firebase";
import Layout from "../../components/layout";
import { TitleBody, DateTitleBody } from "../../components/body-text";
import { CTA } from "../../components/buttons";
import ImgSlider from "../../components/image-slider";
import * as S from "../../lib/styles";
import { Spacing } from "../../lib/spacing";
import { H1, H2, H3, P } from "../../lib/typography";
import { Colors } from "../../lib/colors";

const Request = () => {
  const [initialized, setInitialized] = useState(false);

  // useEffect(() => {
  //   if (!initialized) {
  //     setInitialized(true);
  //     // INITIALIZED FIREBASE
  //     const database = firebase.database();
  //     const ref = database.ref().child("about");
  //     ref.on("value", snap => {
  //       setAbout(snap.val());
  //     });
  //   }
  // });

  return (
    <Layout hamburger>
      <S.LargeContainer>
        <ScrollAnimation animateIn="fadeIn">
          <S.TitleBody>
            <H2 marginBottom={Spacing.md} textAlign="center">
              WHO WE ARE
            </H2>
            <P>
              At Sagrado Corazón, The Collaborative Innovation Center: Neeuko
              has a team of multidisciplinary design facilitators, technology,
              and infrastructure that gives visionaries access to product
              development resources so they can achieve their dreams.
            </P>
          </S.TitleBody>
        </ScrollAnimation>
      </S.LargeContainer>
    </Layout>
  );
};

export default Request;
