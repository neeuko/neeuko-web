// @ts-check
/** @type {{title: string}} */

import Head from "next/head";
import { Hamburger } from "./navigations";

export default ({ children, title = "Neeuko" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Hamburger />
    <div
      style={{
        width: "calc(100% - 54pt)",
        marginLeft: "44pt"
      }}
    >
      {children}
    </div>
  </div>
);
