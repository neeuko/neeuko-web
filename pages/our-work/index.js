import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import Layout from "../../components/layout";
import * as S from "../../lib/styles";
import { Spacing } from "../../lib/spacing";
import { H1, H2, H3, P } from "../../lib/typography";
import { Colors } from "../../lib/colors";
import { TitleBody } from "../../components/body-text";

const OurWork = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      // add here scripts that need to be called on component will mount
    }
  });

  return (
    <Layout hamburger>
      <S.LargeContainer>
        <H1
          color={Colors.blue}
          style={{ textAlign: "center", marginBottom: Spacing.lg }}
        >
          PROJECTS & COLLABORATIONS
        </H1>
        <H2 style={{ marginBottom: Spacing.sm }}>AVI</H2>
        <S.WideImg src="../../static/images/projects.png" height="300pt" />
        <P style={{ marginBottom: Spacing.lg }}>
          Are transmedia products the future of toys? -In January 2019 Neeuko
          has partnered with designer and artist Angel Oliveras to explore the
          development of a line of transmedia products related to tangible toy
          products. Neeuko will work with Oliveras to develop the schematics,
          designs, and future development of transmedia products for his bird
          toy line.
        </P>
        <H2 style={{ marginBottom: Spacing.md }}>Spoon Food Tours</H2>
        <S.LeftBlock>
          <S.WideImg src="../../static/images/spoon.png" />
        </S.LeftBlock>
        <S.RightBlock>
          <P style={{ marginBottom: Spacing.lg }}>
            How can gamification impact or improve food service experiences? In
            January 2019 we partnered with Spoon Food Tours to develop
            innovative products that improve food travel experiences for
            visitors in the island. By developing co-creation and game strategy
            sessions, Neeuko and Spoon Food Tours look to revolutionize food
            travel services and user experiences through play.
          </P>
        </S.RightBlock>
        <H2 style={{ marginBottom: Spacing.md }}>Plaza Guayama</H2>
        <S.LeftBlock>
          <S.WideImg src="../../static/images/plaza.png" />
        </S.LeftBlock>
        <S.RightBlock>
          <P style={{ marginBottom: Spacing.lg }}>
            Can retail become a space for innovation? In December 2018 we
            partnered with Plaza Guayama Inc. to design a co-working space in
            the retail mall Plaza Guayama. The goal of the space is to foster a
            innovation environment on the south side of the island by designing
            a production space and activities calendar that will engage people
            in the retail space. Furthermore, the agreement also seeks to create
            an innovation project and an accelerator fund so that new innovative
            ideas can take place at Plaza Guayama.
          </P>
        </S.RightBlock>
        <H2 style={{ marginBottom: Spacing.md }}>USDA</H2>
        <S.LeftBlock>
          <S.WideImg src="../../static/images/usda.png" />
        </S.LeftBlock>
        <S.RightBlock>
          <P style={{ marginBottom: Spacing.lg }}>
            Can architectural modeling and design help environment conservation
            efforts?- In November 2017, Neeuko has partnered with Arq. Alejandro
            Mieses and Arq. Tamara Orozco in the development of tools and
            architectural models for a USDA Grant award that seeks to improve
            conservation efforts. By using tailored made software and
            architectural modeling they have been able to replicate conservation
            models that reduce the risk of flooding and help preserve rural area
            land integrity.
          </P>
        </S.RightBlock>
        <H2 style={{ marginBottom: Spacing.md }}>San Ignacio</H2>
        <S.LeftBlock>
          <S.WideImg src="../../static/images/san.png" />
        </S.LeftBlock>
        <S.RightBlock>
          <P style={{ marginBottom: Spacing.lg }}>
            The youth is our future how can entrepreneurship prepare the for the
            future? In January 2017 we partnered with Colegio San Ignacio and
            developed an entrepreneurship based curriculum that would enable
            students to implement entrepreneurship tools and principles to their
            everyday life. Furthermore, the course seeked to engage students
            with design and innovation concepts in education.
          </P>
        </S.RightBlock>
        <H2 style={{ marginBottom: Spacing.md }}>Draco Rosa</H2>
        <S.LeftBlock>
          <S.WideImg src="../../static/images/draco.png" />
        </S.LeftBlock>
        <S.RightBlock>
          <P style={{ marginBottom: Spacing.lg }}>
            Can a challenge base approach to learning provide viable market
            solutions? In December 2017 we partner with one of Puerto Rico’s
            most esteemed artist Robi Draco Rosa to develop a course around the
            educational practices of challenge based learning. The students were
            tasked with developing a marketing campaign that will enable and
            push forward brand awareness for of Draco’s coffee products. The
            students that won the challenge won a cash award.
          </P>
        </S.RightBlock>
      </S.LargeContainer>
    </Layout>
  );
};

export default OurWork;
