import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { H1 } from "../../lib/typography";
import { TitleBody } from "../../components/body-text";
import { CTA } from "../../components/buttons";

const About = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      // add here scripts that need to be called on component will mount
    } else {
      // add here scripts that need to be called on component did update
    }
    // add here scripts that need to be called on component will unmount
    return () => {};
  });

  return (
    <Layout>
      <div>
        <H1>NEEUKO WEB</H1>
        <TitleBody title="WHAT WE DO">
          At The Center we work at the intersection of academic research,
          practical design, and art. It is organized as a structure of three
          units: a design laboratory, a fabrication lab(FabLab), and a community
          program(Nuestro Barrio); within those units we provide services in the
          areas of ideation, validation, research, product development, and
          commercialization.
        </TitleBody>
        <CTA onClick={() => console.log("success!")}>PAPERS & PRESS</CTA>
      </div>
    </Layout>
  );
};

export default About;
