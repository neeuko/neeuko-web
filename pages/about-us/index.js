import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { TitleBody } from "../../components/body-text";
import { CTA } from "../../components/buttons";
import { DateTitleBody } from "../../components/body-text";

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
        <TitleBody title="WHO WE ARE">
          At Sagrado Corazón, The Collaborative Innovation Center: Neeuko has a
          team of mutltidisciplinary design facilitators, technology, and
          infrastructure that gives visionaries access to product development
          resources so they can acheive their dreams.
        </TitleBody>
        <TitleBody title="WHAT WE DO">
          At The Center we work at the intersection of academic research,
          practical design, and art. It is orgnized as a structure of three
          units: a design laboratory, a fabrication lab(FabLab), and a community
          program(Nuestro Barrio); within those units we provide services in the
          areas of ideation, validation, research, product development, and
          commercialization.
        </TitleBody>
        <CTA onClick={() => console.log("success!")}>PAPERS & PRESS</CTA>
        <TitleBody title="OUR PRINCIPLES">
          We are committed to increasing accessibility to design & innovation
          tools and services within our immediate community. To that end we
          pursue challenging design projects with a critical perspective
          questioning issues of ethic and justice.
        </TitleBody>
      </div>
      <div>
        <DateTitleBody
          date="FECHA"
          title="TITULO O TEXTO REFERENTE A LA ENTREVISTA"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque
          nulla, elementum ut viverra ac, dictum sed augue. Sed massa turpis,
          auctor at quam et, dictum dapibus ex. Curabitur eget purus sit amet
          lectus finibus tincidunt. Aliquam aliquet faucibus dolor at tempus.
          Fusce ut leo magna. Curabitur ac tincidunt purus. Mauris pulvinar
          felis felis, sed tristique ex scelerisque quis. Sed a risus vitae
          sapien posuere malesuada. Nunc malesuada velit sed ipsum eleifend
          rutrum. Aenean vestibulum lorem elit, vel euismod leo vehicula ut.
          Suspendisse sagittis ex et laoreet eleifend. In pretium nunc neque, et
          ultrices felis condimentum malesuada. Nam mauris tellus, aliquet quis
          libero ac, bibendum posuere odio. Curabitur faucibus est eget risus
          facilisis, sit amet mattis lorem tincidunt. Suspendisse iaculis massa
          a diam consectetur finibus. Sed sagittis ex sed egestas finibus. In
          venenatis mi vehicula tincidunt fermentum. Nullam in neque nec arcu
          consequat pellentesque id quis ex. Sed malesuada, eros non accumsan
          interdum, mi odio malesuada mi, at cursus lacus sapien quis velit.
        </DateTitleBody>
        <DateTitleBody
          date="FECHA"
          title="TITULO O TEXTO REFERENTE A LA ENTREVISTA"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque
          nulla, elementum ut viverra ac, dictum sed augue. Sed massa turpis,
          auctor at quam et, dictum dapibus ex. Curabitur eget purus sit amet
          lectus finibus tincidunt. Aliquam aliquet faucibus dolor at tempus.
          Fusce ut leo magna. Curabitur ac tincidunt purus. Mauris pulvinar
          felis felis, sed tristique ex scelerisque quis. Sed a risus vitae
          sapien posuere malesuada. Nunc malesuada velit sed ipsum eleifend
          rutrum. Aenean vestibulum lorem elit, vel euismod leo vehicula ut.
          Suspendisse sagittis ex et laoreet eleifend. In pretium nunc neque, et
          ultrices felis condimentum malesuada. Nam mauris tellus, aliquet quis
          libero ac, bibendum posuere odio. Curabitur faucibus est eget risus
          facilisis, sit amet mattis lorem tincidunt. Suspendisse iaculis massa
          a diam consectetur finibus. Sed sagittis ex sed egestas finibus. In
          venenatis mi vehicula tincidunt fermentum. Nullam in neque nec arcu
          consequat pellentesque id quis ex. Sed malesuada, eros non accumsan
          interdum, mi odio malesuada mi, at cursus lacus sapien quis velit.
        </DateTitleBody>
      </div>
    </Layout>
  );
};

export default About;
