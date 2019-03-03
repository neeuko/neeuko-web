import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { H1 } from "../../lib/typography";
import { TitleBody, TitleListSideImg } from "../../components/body-text";
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
        <TitleBody padding="85px 50px" width="33.3%" title="INNOVATION">
          Innovation is crucial for business development and incredibly
          necessary for the betterment of society. Our innovation courses and
          workshops are neatly designed to teach students and our immediate
          community about how innovation process work and are implemented.
        </TitleBody>

        <TitleBody padding="85px 50px" width="33.3%" title="DESIGN">
          At neeuko we pride ourselves on incorporating design in every aspect
          of our decision making and production efforts. For us, design is not
          only about making, is also about thinking, questioning, and
          reinventing. Through our design courses we seek to inspire students to
          think about design as a form of questioning.
        </TitleBody>

        <TitleBody padding="85px 50px" width="33.3%" title="ENTREPENEURSHIP">
          Being able to bring products to market can help people achieve
          financial independence. For us ensuring financial independence is
          incredibly important to that end we have models some important
          workshops to ensure that students and the community have a shot at
          undertake a business venture.
        </TitleBody>
        <div style={{ textAlign: "center" }}>
          <CTA onClick={() => console.log("success!")}>SERVICES</CTA>

          <TitleListSideImg>
            <ul>
              <li>
                United Nations Sustainable Development Goals Case Study Workshop
              </li>
              <li>
                United Nations Sustainable Development Goals Stakeholders
                Workshop
              </li>
              <li>
                Presentation and Public Speaking Practice: Debate Workshop
              </li>
              <li>Customer Value Proposition Workshop</li>
            </ul>
          </TitleListSideImg>
        </div>
      </div>
    </Layout>
  );
};

export default About;
