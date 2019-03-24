import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from '../../components/layout';
import * as S from '../../lib/styles';
import Spacing from '../../lib/spacing';
import { H2, P } from '../../lib/typography';

const Request = () => (
  <Layout hamburger>
    <S.LargeContainer>
      <ScrollAnimation animateIn="fadeIn">
        <S.TitleBody>
          <H2 marginBottom={Spacing.md} textAlign="center">
            REQUEST
          </H2>
          <P>This page is under construction.</P>
        </S.TitleBody>
      </ScrollAnimation>
    </S.LargeContainer>
  </Layout>
);

export default Request;
