import React, { useState, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import * as S from '../../lib/styles';
import Spacing from '../../lib/spacing';
import { H2, P } from '../../lib/typography';

import Layout from '../../components/layout';

const About = () => {
  const [initialized, setInitialized] = useState(false);
  const [about, setAbout] = useState('');

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      // INITIALIZED FIREBASE
      // const database = firebase.database();
      // const ref = database.ref().child("about");
      // ref.on("value", snap => {
      //   setAbout(snap.val());
      // });
    }
    // console.log("🔥 ", about);
  });

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
          <S.TitleBody marginLeft="40pt">
            <H2 marginBottom={Spacing.md} textAlign="center">
              WHAT WE DO
            </H2>
            <P>
              At The Center we work at the intersection of academic research,
              practical design, and art. It is organized as a structure of three
              units: a design laboratory, a fabrication lab(FabLab), and a
              community program(Nuestro Barrio); within those units we provide
              services in the areas of ideation, validation, research, product
              development, and commercialization.
            </P>
          </S.TitleBody>
          <S.TitleBody marginLeft="40pt">
            <H2 marginBottom={Spacing.md} textAlign="center">
              OUR PRINCIPLES
            </H2>
            <P>
              We are committed to increasing accessibility to design &
              innovation tools and services within our immediate community. To
              that end we pursue challenging design projects with a critical
              perspective questioning issues of ethics and justice.
            </P>
          </S.TitleBody>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="fadeIn">
          <H1
            color={Colors.blue}
            style={{ textAlign: "center", marginBottom: Spacing.lg }}
          >
            MEET THE TEAM
          </H1>
          <S.GridCard margin={`0 5pt 0 0`} corner>
            <S.GridCardImg src="" />
            <H3 style={{ marginBottom: Spacing.xs }}>Name</H3>
            <P>Position</P>
          </S.GridCard>
          <S.GridCard margin="0 5pt">
            <S.GridCardImg src="" />
            <H3 style={{ marginBottom: Spacing.xs }}>Name</H3>
            <P>Position</P>
          </S.GridCard>
          <S.GridCard margin="0 5pt">
            <S.GridCardImg src="" />
            <H3 style={{ marginBottom: Spacing.xs }}>Name</H3>
            <P>Position</P>
          </S.GridCard>
          <S.GridCard margin="0 0 0 5pt" corner>
            <S.GridCardImg src="" />
            <H3 style={{ marginBottom: Spacing.xs }}>Name</H3>
            <P>Position</P>
          </S.GridCard>
          <S.GridCard margin="0 5pt 0 0" corner>
            <S.GridCardImg src="" />
            <H3 style={{ marginBottom: Spacing.xs }}>Name</H3>
            <P>Position</P>
          </S.GridCard>
          <S.GridCard margin="0 5pt">
            <S.GridCardImg src="" />
            <H3 style={{ marginBottom: Spacing.xs }}>Name</H3>
            <P>Position</P>
          </S.GridCard>
        </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeIn">
          <H1
            color={Colors.blue}
            style={{ textAlign: "center", marginTop: Spacing.xl }}
          >
            PAPERS & PRESS
          </H1>
        </ScrollAnimation>
        <ImgSlider /> */}
      </S.LargeContainer>
    </Layout>
  );
};

export default About;
