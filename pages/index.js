import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { GridNav, GridMobileNav } from "../components/navigations";
import { H1 } from "../lib/typography";
import * as S from "../lib/styles";

const App = () => {
  const [initialized, setInitialized] = useState(false);
  const [intro, setIntro] = useState(true);
  const [introTransition, setIntroTransition] = useState(false);

  useEffect(() => {
    console.log(process.env.SECRET);
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

  return (
    <Layout>
      {intro && (
        <S.LogoBackground intro={introTransition}>
          <S.Logo intro={introTransition}>
            <S.LogoImg src="../static/icons/logo.png" />
          </S.Logo>
        </S.LogoBackground>
      )}
      <GridNav />
      <GridMobileNav />
    </Layout>
  );
};

export default App;
