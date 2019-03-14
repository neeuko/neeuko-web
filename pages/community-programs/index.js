import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import Layout from "../../components/layout";
import * as S from "../../lib/styles";
import { Spacing } from "../../lib/spacing";
import { Colors } from "../../lib/colors";
import { H1, H2, H3, H4, P } from "../../lib/typography";

const CommunityPrograms = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  });

  return (
    <Layout hamburger>
      <S.LargeContainer>
        <H1>COMMUNITY PROGRAMS</H1>
      </S.LargeContainer>
    </Layout>
  );
};

export default CommunityPrograms;
