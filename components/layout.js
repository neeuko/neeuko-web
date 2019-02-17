// @ts-check
/** @type {{title: string}} */

import Head from "next/head";
import { DefaultNav } from "./navigations";

export default ({ children, title = "Neeuko" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <DefaultNav />
    {children}
  </div>
);
