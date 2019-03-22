import Head from "next/head";
import { Hamburger } from "./navigations";
import { Spacing } from "../lib/spacing";
import * as S from "../lib/styles";

export default ({ children, title = "Neeuko", hamburger = false }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
    </Head>
    {hamburger && <Hamburger />}
    <S.LayoutChildren hamburger={hamburger}>{children}</S.LayoutChildren>
  </div>
);
