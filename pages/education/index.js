import React, { useState, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import * as S from '../../lib/styles';
import Spacing from '../../lib/spacing';
import Colors from '../../lib/colors';
import { H1, H2, P, Li } from '../../lib/typography';

import Layout from '../../components/layout';

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
          <S.TitleBody>
            <H2
              marginBottom={Spacing.md}
              textAlign="center"
              color={Colors.blue}
            >
              INNOVATION
            </H2>
            <P>
              Innovation is crucial for business development and incredibly
              necessary for the betterment of society. Our innovation courses
              and workshops are neatly designed to teach students and our
              immediate community about how innovation process work and are
              implemented.
            </P>
          </S.TitleBody>

          <S.TitleBody marginLeft="40pt">
            <H2 marginBottom={Spacing.md} textAlign="center">
              DESIGN
            </H2>
            <P>
              At neeuko we pride ourselves on incorporating design in every
              aspect of our decision making and production efforts. For us,
              design is not only about making, is also about thinking,
              questioning, and reinventing. Through our design courses we seek
              to inspire students to think about design as a form of
              questioning.
            </P>
          </S.TitleBody>

          <S.TitleBody marginLeft="40pt">
            <H2 marginBottom={Spacing.md} textAlign="center" color={Colors.red}>
              ENTREPENEURSHIP
            </H2>
            <P>
              Being able to bring products to market can help people achieve
              financial independence. For us ensuring financial independence is
              incredibly important to that end we have models some important
              workshops to ensure that students and the community have a shot at
              undertake a business venture.
            </P>
          </S.TitleBody>
          <H1
            color={Colors.blue}
            style={{
              textAlign: 'center',
              marginTop: Spacing.xl,
              marginBottom: Spacing.lg,
            }}
          >
            WORKSHOPS
          </H1>
          <H2 style={{ marginBottom: Spacing.sm }}>DESIGN</H2>
          <S.LeftBlock>
            <ul
              style={{
                padding: Spacing.lg,
                border: `1pt solid ${Colors.black}`,
                margin: '0',
              }}
            >
              <Li>
                Universidad De Sagrado Corazón Human Centered Design Challenge
              </Li>
            </ul>
          </S.LeftBlock>
          <S.RightBlock>
            <img src="../../static/images/design.png" width="100%" alt="Design" />
          </S.RightBlock>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <H2 color={Colors.red} style={{ marginBottom: Spacing.sm }}>
            ENTREPENEURSHIP
          </H2>
          <S.LeftBlock>
            <img
              src="../../static/images/entrepeneurship.png"
              width="100%"
              style={{ marginBottom: '-5pt' }}
              alt="Entrepeneurship"
            />
          </S.LeftBlock>
          <S.RightBlock>
            <ul
              style={{
                padding: Spacing.lg,
                width: '100%',
                margin: '0',
                border: `1pt solid ${Colors.red}`,
              }}
            >
              <Li>
                United Nations Sustainable Development Goals Case Study Workshop
              </Li>

              <Li>
                United Nations Sustainable Development Goals Stakeholders
                Workshop
              </Li>
              <Li>
                Presentation and Public Speaking Practice: Debate Workshop
              </Li>
              <Li>Customer Value Proposition Workshop</Li>
            </ul>
          </S.RightBlock>
        </ScrollAnimation>
      </S.LargeContainer>
    </Layout>
  );
};

export default About;
