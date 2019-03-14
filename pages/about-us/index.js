import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Layout from "../../components/layout";
import { TitleBody, DateTitleBody } from "../../components/body-text";
import { CTA } from "../../components/buttons";
import ImgSlider from "../../components/image-slider";
import * as A from "../../lib/animation";
import * as S from "../../lib/styles";
import { Spacing } from "../../lib/spacing";
import { H1, H2, H3, P } from "../../lib/typography";
import { Colors } from "../../lib/colors";

const About = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
  });

  return (
    <Layout hamburger>
      <S.LargeContainer>
        <A.FadeInUp>
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
        </A.FadeInUp>
        <H1
          color={Colors.blue}
          style={{ textAlign: "center", marginBottom: Spacing.lg }}
        >
          MEET THE TEAM
        </H1>
        <S.GridCard margin={`0 5pt 0 0`} corner>
          <S.GridCardImg src="" />
          <H3>Title</H3>
          <P>Subtitle</P>
        </S.GridCard>
        <S.GridCard margin="0 5pt">
          <S.GridCardImg src="" />
          <H3>Title</H3>
          <P>Subtitle</P>
        </S.GridCard>
        <S.GridCard margin="0 5pt">
          <S.GridCardImg src="" />
          <H3>Title</H3>
          <P>Subtitle</P>
        </S.GridCard>
        <S.GridCard margin="0 0 0 5pt" corner>
          <S.GridCardImg src="" />
          <H3>Title</H3>
          <P>Subtitle</P>
        </S.GridCard>
        <S.GridCard margin="0 5pt 0 0" corner>
          <S.GridCardImg src="" />
          <H3>Title</H3>
          <P>Subtitle</P>
        </S.GridCard>
        <S.GridCard margin="0 5pt">
          <S.GridCardImg src="" />
          <H3>Title</H3>
          <P>Subtitle</P>
        </S.GridCard>
        <ImgSlider />

        <DateTitleBody
          date="February 17, 2016"
          title="Sagrado opens the first center of collaborative innovation in Puerto Rico"
          width="554pt"
        >
          Sagrado Corazón inaugurates the first collaborative innovation center
          in Puerto Rico where you can develop and execute your idea all in one
          place.
        </DateTitleBody>
        <ScrollAnimation animateIn="fadeIn">
          <DateTitleBody
            date="FECHA"
            title="TITULO O TEXTO REFERENTE A LA ENTREVISTA"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              maximus finibus arcu, in porta tortor dignissim non. Aliquam vitae
              erat ultricies, ornare dolor in, vulputate leo. Cras vel nunc
              convallis, pretium purus in, sodales ante. Sed ornare velit in est
              fermentum consectetur. Mauris a ultricies magna. Nulla et augue in
              leo consectetur vulputate vitae a neque. Nunc eleifend neque
              libero, sed ultrices ante ullamcorper ut. Duis maximus consectetur
              nulla, non tincidunt neque feugiat vel. Etiam egestas aliquam
              neque sed pellentesque. In faucibus ultricies mi vitae tempor.
              Phasellus convallis sodales convallis. Nunc pellentesque ex vel
              est feugiat, at scelerisque sem ornare. Phasellus aliquet sed nunc
              ut euismod. Morbi vitae lacinia ex. Suspendisse eu blandit mauris,
              quis lacinia libero. In tristique eros varius nibh volutpat, at
              bibendum sapien tristique.
            </p>
          </DateTitleBody>
        </ScrollAnimation>
      </S.LargeContainer>
    </Layout>
  );
};

export default About;
