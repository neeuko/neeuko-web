import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import Layout from "../../components/layout";
import * as S from "../../lib/styles";
import { Spacing } from "../../lib/spacing";
import { H1, H2, H3, P } from "../../lib/typography";
import { Colors } from "../../lib/colors";
import { TitleBody } from "../../components/body-text";

const About = () => {
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
        <ScrollAnimation animateIn="fadeIn">
          <TitleBody title="WHAT WE DO">
            At The Center we work at the intersection of academic research,
            practical design, and art. It is organized as a structure of three
            units: a design laboratory, a fabrication lab(FabLab), and a
            community program(Nuestro Barrio); within those units we provide
            services in the areas of ideation, validation, research, product
            development, and commercialization.
          </TitleBody>
        </ScrollAnimation>
      </S.LargeContainer>
    </Layout>
  );
};

export default About;
