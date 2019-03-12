import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { H1, H3, H4, P } from "../../lib/typography";
import { TitleBody } from "../../components/body-text";
import * as S from "../../lib/styles";
import { Colors } from "../../lib/colors";
import { Spacing } from "../../lib/spacing";
import { RegularBtn } from "../../components/buttons";

const About = () => {
  const [initialized, setInitialized] = useState(false);

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
        <H1
          color={Colors.blue}
          style={{ textAlign: "center", marginBottom: Spacing.lg }}
        >
          EVENTS
        </H1>
        <S.GridLargeCard margin="0">
          <S.GridLargeCardImg src="" />
          <H4 style={{ margin: `0 0 ${Spacing.sm} 0` }}>FEBRUARY 17, 2019</H4>
          <H3
            style={{
              marginBottom: Spacing.md
            }}
          >
            SAGRADO OPENS THE FIRST CENTER OF COLLABORATIVE INNOVATIONIN PUERTO
            RICO
          </H3>
          <RegularBtn>LEARN MORE</RegularBtn>
        </S.GridLargeCard>
        <S.GridLargeCard margin="0 19pt">
          <S.GridLargeCardImg src="" />
          <H4 style={{ margin: `0 0 ${Spacing.sm} 0` }}>FEBRUARY 17, 2019</H4>
          <H3
            style={{
              marginBottom: Spacing.md
            }}
          >
            SAGRADO OPENS THE FIRST CENTER OF COLLABORATIVE INNOVATIONIN PUERTO
            RICO
          </H3>
          <RegularBtn>LEARN MORE</RegularBtn>
        </S.GridLargeCard>
        <S.GridLargeCard margin="0">
          <S.GridLargeCardImg src="" />
          <H4 style={{ margin: `0 0 ${Spacing.sm} 0` }}>FEBRUARY 17, 2019</H4>
          <H3
            style={{
              marginBottom: Spacing.md
            }}
          >
            SAGRADO OPENS THE FIRST CENTER OF COLLABORATIVE INNOVATIONIN PUERTO
            RICO
          </H3>
          <RegularBtn>LEARN MORE</RegularBtn>
        </S.GridLargeCard>
        <S.GridLargeCard margin="0">
          <S.GridLargeCardImg src="" />
          <H4 style={{ margin: `0 0 ${Spacing.sm} 0` }}>FEBRUARY 17, 2019</H4>
          <H3
            style={{
              marginBottom: Spacing.md
            }}
          >
            SAGRADO OPENS THE FIRST CENTER OF COLLABORATIVE INNOVATIONIN PUERTO
            RICO
          </H3>
          <RegularBtn>LEARN MORE</RegularBtn>
        </S.GridLargeCard>
        <S.GridLargeCard margin="0 19pt">
          <S.GridLargeCardImg src="" />
          <H4 style={{ margin: `0 0 ${Spacing.sm} 0` }}>FEBRUARY 17, 2019</H4>
          <H3
            style={{
              marginBottom: Spacing.md
            }}
          >
            SAGRADO OPENS THE FIRST CENTER OF COLLABORATIVE INNOVATIONIN PUERTO
            RICO
          </H3>
          <RegularBtn>LEARN MORE</RegularBtn>
        </S.GridLargeCard>
        <S.GridLargeCard margin="0">
          <S.GridLargeCardImg src="" />
          <H4 style={{ margin: `0 0 ${Spacing.sm} 0` }}>FEBRUARY 17, 2019</H4>
          <H3
            style={{
              marginBottom: Spacing.md
            }}
          >
            SAGRADO OPENS THE FIRST CENTER OF COLLABORATIVE INNOVATIONIN PUERTO
            RICO
          </H3>
          <RegularBtn>LEARN MORE</RegularBtn>
        </S.GridLargeCard>
      </S.LargeContainer>
    </Layout>
  );
};

export default About;
