import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { H1, H2, H3, H4, H5, H6, P } from "../../lib/typography";
import {
  TitleBody,
  TitleSubtitleBodySideImg
} from "../../components/body-text";

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
        <TitleBody title="ABOUT">
          Nuestro Barrio es una iniciativa que trabaja para la creación
          estratégica y participativa del Distrito Cultural de Santurce.
          Imaginamos un distrito inclusivo y sostenible que ofrezca
          oportunidades de desarrollo económico y social para su gente. NB opera
          con el apoyo del National Endowment for the Arts y el Economic
          Development Administration.
        </TitleBody>
        <TitleSubtitleBodySideImg
          title="D. Javier De Jesús y Martínez"
          subtitle="EXCECUTIVE DIRECTOR"
        >
          Javier De Jesús Martínez is an innovator, "socio-institutional
          hacker", serial entrepreneur, academic, urbanist and architect with 20
          years of experience. As both the Executive Director of Sagrado
          Corazón’s Collaborative Innovation Center: Neeuko and the Principal
          Officer for Innovation of the institution, Javier is in charged of
          pushing forward an innovative agenda by identifying funding
          opportunities from key stakeholders at local and global levels. He
          establishes multidisciplinary relationships inside the University and
          makes sure that current institutional structures amplify innovation
          possibilities. Furthermore, he’s in charge of strategically
          implementing the institutional entrepreneurship and collaboration
          plans by identifying opportunities project within the local community
          environment. He was Dean and Co-Founder of the School of Architecture
          of the Pontificia Universidad Católica and graduated from Cooper Union
          for the Advancement of Sciences and Art where he did his thesis under
          the direction of John Hejduk. De Jesús Martínez has extensive
          experience in strategic planning of the city and universities. His
          creative urban vision combined with an experience in public policy,
          design, strategy, public management and financial processes; it
          enhances the identification of opportunities and the conceptualization
          of unique and sustainable solutions and cross-cutting ventures. He
          collaborate with his wife in urban and economic development projects.
          He is also founder of Ron y Café a startup committed with the
          conservation, innovation and development of rum and coffee culture.
        </TitleSubtitleBodySideImg>
      </div>
    </Layout>
  );
};

export default About;
