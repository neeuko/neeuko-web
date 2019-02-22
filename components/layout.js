// @ts-check
/** @type {{title: string}} */

import Head from "next/head";
import { Hamburger } from "./navigations";

export default ({ children, title = "Neeuko", hamburger = false }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {hamburger && <Hamburger />}
    <div
      style={{
        width: hamburger ? "calc(100% - 54pt)" : "calc(100% - 20pt)",
        marginLeft: hamburger ? "44pt" : "10pt"
      }}
    >
      {children}
    </div>
  </div>
);
