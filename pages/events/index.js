import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { H1, H3, H4, P } from "../../lib/typography";
import { TitleBody } from "../../components/body-text";
import * as S from "../../lib/styles";
import { Colors } from "../../lib/colors";
import { Spacing } from "../../lib/spacing";
import { RegularBtn } from "../../components/buttons";

const Events = () => {
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
        <S.GridLargeCard margin={`0 0 ${Spacing.lg} 0`}>
          <S.GridLargeCardImg src="../../static/images/robot.jpg" />
          <H4 style={{ margin: `0 0 ${Spacing.sm} 0` }}>JUNE 29, 2018</H4>
          <P
            style={{
              marginBottom: Spacing.md
            }}
          >
            Neeuko collaborates in the fabrication of an underwater robot.
          </P>
          <RegularBtn
            onClick={() =>
              window.open("http://insagrado.sagrado.edu/robot/", "_blank")
            }
          >
            LEARN MORE
          </RegularBtn>
        </S.GridLargeCard>
        <S.GridLargeCard margin={`0 19pt ${Spacing.lg} 19pt`}>
          <S.GridLargeCardImg src="../../static/images/draco.jpg" />
          <H4 style={{ margin: `0 0 ${Spacing.sm} 0` }}>FEBRUARY 1, 2018</H4>
          <P
            style={{
              marginBottom: Spacing.md
            }}
          >
            Puertorican songwritter and musician Robi Draco Rosa sat down with a
            group of students and talked about his new line of products Jibaro
            Vanguardista
          </P>
          <RegularBtn
            onClick={() =>
              window.open("http://insagrado.sagrado.edu/dracogme390/", "_blank")
            }
          >
            LEARN MORE
          </RegularBtn>
        </S.GridLargeCard>
        <S.GridLargeCard margin={`0 0 ${Spacing.lg} 0`}>
          <S.GridLargeCardImg src="../../static/images/empre.jpg" />
          <H4 style={{ margin: `0 0 ${Spacing.sm} 0` }}>NOVEMBER 10, 2017</H4>
          <P
            style={{
              marginBottom: Spacing.md
            }}
          >
            “Está en nosotros crear un nuevo país” A group of small businesses
            and Sagrado Contigo gathered together at Neeuko to talk about
            Creativity and Business Innovation after the passing of Hurricane
            Maria
          </P>
          <RegularBtn
            onClick={() =>
              window.open("http://insagrado.sagrado.edu/empresarios/", "_blank")
            }
          >
            LEARN MORE
          </RegularBtn>
        </S.GridLargeCard>

        <S.GridLargeCard margin={`0 0 ${Spacing.lg} 0`}>
          <S.GridLargeCardImg src="../../static/images/piloto.jpg" />
          <H4 style={{ margin: `0 0 ${Spacing.sm} 0` }}>APRIL 4, 2017</H4>
          <P
            style={{
              marginBottom: Spacing.md
            }}
          >
            Fostering Innovation in students and professionals Neeuko, Puerto
            Rico Institute Of Robotics, Codetrotters and, STEAM Fab Inc. Have
            signed various agreements to grant easier access to technological
            tools, promoting innovation among high school students, college
            students and professionals
          </P>
          <RegularBtn
            onClick={() =>
              window.open("http://insagrado.sagrado.edu/innova/", "_blank")
            }
          >
            LEARN MORE
          </RegularBtn>
        </S.GridLargeCard>
        <S.GridLargeCard margin={`0 19pt ${Spacing.lg} 19pt`}>
          <S.GridLargeCardImg src="../../static/images/neeuko01.jpg" />
          <H4 style={{ margin: `0 0 ${Spacing.sm} 0` }}>FEBRUARY 17, 2016</H4>
          <P
            style={{
              marginBottom: Spacing.md
            }}
          >
            Sagrado opens the first center of collaborative innovation in Puerto
            Rico Sagrado Corazón inaugurates the first collaborative innovation
            center in Puerto Rico where you can develop and execute your idea
            all in one place.
          </P>
          <RegularBtn
            onClick={() =>
              window.open(
                "http://insagrado.sagrado.edu/sagrado-inaugura-primer-centro-de-innovacion-colaborativa-en-puerto-rico/",
                "_blank"
              )
            }
          >
            LEARN MORE
          </RegularBtn>
        </S.GridLargeCard>
      </S.LargeContainer>
    </Layout>
  );
};

export default Events;
