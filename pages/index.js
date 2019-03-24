import React, { useState, useEffect } from 'react';

import * as S from '../lib/styles';

import Layout from '../components/layout';
import { GridNav, GridMobileNav } from '../components/navigations';


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

  return (
    <Layout>
      <div>
        {intro && (
          <S.LogoBackground intro={introTransition}>
            <S.Logo intro={introTransition}>
              <S.LogoImg src="../static/icons/logo.png" />
            </S.Logo>
          </S.LogoBackground>
        )}
        <GridNav />
        <GridMobileNav />
      </div>
    </Layout>
  );
};

export default App;
