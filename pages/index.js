import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { GridNav } from "../components/navigations";
import { H1 } from "../lib/typography";
import * as S from "../lib/styles";

const App = () => {
  const [initialized, setInitialized] = useState(false);
  const [intro, setIntro] = useState(true);
  const [introTransition, setIntroTransition] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      setTimeout(() => {
        setIntroTransition(true);
        setTimeout(() => {
          setIntro(false);
        }, 1500);
      }, 3000);
    }
  });

  const handle = () => {};

  return (
    <Layout>
      {intro && (
        <S.LandingBackground intro={introTransition}>
          <S.Logo intro={introTransition}>NEEUKO</S.Logo>
        </S.LandingBackground>
      )}
      <GridNav />
    </Layout>
  );
};

export default App;
