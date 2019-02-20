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
    <Layout hamburger>
      <div>
        <TitleBody title="INNOVATION">
          Innovation is crucial for business development and incredibly
          necessary for the betterment of society. Our innovation courses and
          workshops are neatly designed to teach students and our immediate
          community about how innovation process work and are implemented.
        </TitleBody>
        <TitleBody title="DESIGN">
          At neeuko we pride ourselves on incorporating design in every aspect
          of our decision making and production efforts. For us, design is not
          only about making, is also about thinking, questioning, and
          reinventing. Through our design courses we seek to inspire students to
          think about design as a form of questioning.
        </TitleBody>
        <CTA onClick={() => console.log("success!")}>WORKSHOPS</CTA>
        <TitleBody title="ENTREPENEURSHIP">
          Being able to bring products to market can help people achieve
          financial independence. For us ensuring financial independence is
          incredibly important to that end we have models some important
          workshops to ensure that students and the community have a shot at
          undertake a business venture.
        </TitleBody>
      </div>
    </Layout>
  );
};

export default About;
