import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { Hamburger } from './navigations';
import * as S from '../lib/styles';

const Layout = ({ children, title, hamburger }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
    </Head>
    {hamburger && <Hamburger />}
    <S.LayoutChildren hamburger={hamburger}>{children}</S.LayoutChildren>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  hamburger: PropTypes.bool,
};

Layout.defaultProps = {
  children: <div />,
  title: 'Neeuko',
  hamburger: false,
};

export default Layout;
