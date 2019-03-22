import React, { useState, useEffect } from "react";

import Layout from "../../components/layout";
import * as S from "../../lib/styles";

const CommunityPrograms = () => {
  return (
    <Layout hamburger>
      <S.IframeWeb src="https://www.nuestrobarrio.org/" />
    </Layout>
  );
};

export default CommunityPrograms;
