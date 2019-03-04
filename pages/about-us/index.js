import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { TitleBody, DateTitleBody } from "../../components/body-text";
import { CTA } from "../../components/buttons";
import { ThreeImage } from "../../components/image-slider";

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
        <TitleBody padding="85pt 50pt" title="WHO WE ARE">
          At Sagrado Corazón, The Collaborative Innovation Center: Neeuko has a
          team of multidisciplinary design facilitators, technology, and
          infrastructure that gives visionaries access to product development
          resources so they can achieve their dreams.
        </TitleBody>
        <TitleBody padding="85pt 50pt" title="WHAT WE DO">
          At The Center we work at the intersection of academic research,
          practical design, and art. It is organized as a structure of three
          units: a design laboratory, a fabrication lab(FabLab), and a community
          program(Nuestro Barrio); within those units we provide services in the
          areas of ideation, validation, research, product development, and
          commercialization.
        </TitleBody>
        <TitleBody padding="85pt 50pt" title="OUR PRINCIPLES">
          We are committed to increasing accessibility to design & innovation
          tools and services within our immediate community. To that end we
          pursue challenging design projects with a critical perspective
          questioning issues of ethics and justice.
        </TitleBody>
      </div>

      {/* Begins button and image slider */}
      <div style={{ textAlign: "center", marginBottom: "30pt" }}>
        <CTA onClick={() => console.log("success!")}>PAPERS & PRESS</CTA>
      </div>

      <ThreeImage />

      <DateTitleBody
        date="February 17, 2016"
        title="Sagrado opens the first center of collaborative innovation in Puerto Rico"
      >
        Sagrado Corazón inaugurates the first collaborative innovation center in
        Puerto Rico where you can develop and execute your idea all in one
        place.
      </DateTitleBody>

      {/* Begin 2 DateTitleBody paragraphs */}
      <div>
        <DateTitleBody
          marginTop="5%"
          date="FECHA"
          title="TITULO O TEXTO REFERENTE A LA ENTREVISTA"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            maximus finibus arcu, in porta tortor dignissim non. Aliquam vitae
            erat ultricies, ornare dolor in, vulputate leo. Cras vel nunc
            convallis, pretium purus in, sodales ante. Sed ornare velit in est
            fermentum consectetur. Mauris a ultricies magna. Nulla et augue in
            leo consectetur vulputate vitae a neque. Nunc eleifend neque libero,
            sed ultrices ante ullamcorper ut. Duis maximus consectetur nulla,
            non tincidunt neque feugiat vel. Etiam egestas aliquam neque sed
            pellentesque. In faucibus ultricies mi vitae tempor. Phasellus
            convallis sodales convallis. Nunc pellentesque ex vel est feugiat,
            at scelerisque sem ornare. Phasellus aliquet sed nunc ut euismod.
            Morbi vitae lacinia ex. Suspendisse eu blandit mauris, quis lacinia
            libero. In tristique eros varius nibh volutpat, at bibendum sapien
            tristique.
          </p>
          <p>
            roin luctus urna quis risus varius, ut posuere sapien luctus.
            Suspendisse auctor orci eu elit molestie, nec suscipit justo
            scelerisque. Cras iaculis rutrum turpis nec blandit. Sed euismod
            cursus lacus eget mollis. Phasellus dignissim neque tellus, eu
            tempor ante auctor non. Aliquam hendrerit congue ornare. Morbi
            cursus orci et nulla faucibus feugiat. In quis mollis mauris. Mauris
            efficitur ultricies metus quis tempus. Nulla sit amet feugiat nunc,
            sit amet bibendum augue. Suspendisse potenti. Proin auctor eleifend
            eros, ac pretium est blandit sit amet. Fusce quis placerat lectus.
            Suspendisse sit amet lacinia quam. Aenean ut tellus dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            maximus finibus arcu, in porta tortor dignissim non. Aliquam vitae
            erat ultricies, ornare dolor in, vulputate leo. Cras vel nunc
            convallis, pretium purus in, sodales ante. Sed ornare velit in est
            fermentum consectetur. Mauris a ultricies magna. Nulla et augue in
            leo consectetur vulputate vitae a neque. Nunc eleifend neque libero,
            sed ultrices ante ullamcorper ut. Duis maximus consectetur nulla,
            non tincidunt neque feugiat vel. Etiam egestas aliquam neque sed
            pellentesque. In faucibus ultricies mi vitae tempor. Phasellus
            convallis sodales convallis. Nunc pellentesque ex vel est feugiat,
            at scelerisque sem ornare. Phasellus aliquet sed nunc ut euismod.
            Morbi vitae lacinia ex. Suspendisse eu blandit mauris, quis lacinia
            libero. In tristique eros varius nibh volutpat, at bibendum sapien
            tristique.
          </p>
          <p>
            Proin luctus urna quis risus varius, ut posuere sapien luctus.
            Suspendisse auctor orci eu elit molestie, nec suscipit justo
            scelerisque. Cras iaculis rutrum turpis nec blandit. Sed euismod
            cursus lacus eget mollis. Phasellus dignissim neque tellus, eu
            tempor ante auctor non. Aliquam hendrerit congue ornare. Morbi
            cursus orci et nulla faucibus feugiat. In quis mollis mauris. Mauris
            efficitur ultricies metus quis tempus. Nulla sit amet feugiat nunc,
            sit amet bibendum augue. Suspendisse potenti. Proin auctor eleifend
            eros, ac pretium est blandit sit amet. Fusce quis placerat lectus.
            Suspendisse sit amet lacinia quam. Aenean ut tellus dolor.
          </p>
        </DateTitleBody>
        <DateTitleBody
          date="FECHA"
          title="TITULO O TEXTO REFERENTE A LA ENTREVISTA"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            maximus finibus arcu, in porta tortor dignissim non. Aliquam vitae
            erat ultricies, ornare dolor in, vulputate leo. Cras vel nunc
            convallis, pretium purus in, sodales ante. Sed ornare velit in est
            fermentum consectetur. Mauris a ultricies magna. Nulla et augue in
            leo consectetur vulputate vitae a neque. Nunc eleifend neque libero,
            sed ultrices ante ullamcorper ut. Duis maximus consectetur nulla,
            non tincidunt neque feugiat vel. Etiam egestas aliquam neque sed
            pellentesque. In faucibus ultricies mi vitae tempor. Phasellus
            convallis sodales convallis. Nunc pellentesque ex vel est feugiat,
            at scelerisque sem ornare. Phasellus aliquet sed nunc ut euismod.
            Morbi vitae lacinia ex. Suspendisse eu blandit mauris, quis lacinia
            libero. In tristique eros varius nibh volutpat, at bibendum sapien
            tristique.
          </p>
          <p>
            Proin luctus urna quis risus varius, ut posuere sapien luctus.
            Suspendisse auctor orci eu elit molestie, nec suscipit justo
            scelerisque. Cras iaculis rutrum turpis nec blandit. Sed euismod
            cursus lacus eget mollis. Phasellus dignissim neque tellus, eu
            tempor ante auctor non. Aliquam hendrerit congue ornare. Morbi
            cursus orci et nulla faucibus feugiat. In quis mollis mauris. Mauris
            efficitur ultricies metus quis tempus. Nulla sit amet feugiat nunc,
            sit amet bibendum augue. Suspendisse potenti. Proin auctor eleifend
            eros, ac pretium est blandit sit amet. Fusce quis placerat lectus.
            Suspendisse sit amet lacinia quam. Aenean ut tellus dolor.{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            maximus finibus arcu, in porta tortor dignissim non. Aliquam vitae
            erat ultricies, ornare dolor in, vulputate leo. Cras vel nunc
            convallis, pretium purus in, sodales ante. Sed ornare velit in est
            fermentum consectetur. Mauris a ultricies magna. Nulla et augue in
            leo consectetur vulputate vitae a neque. Nunc eleifend neque libero,
            sed ultrices ante ullamcorper ut. Duis maximus consectetur nulla,
            non tincidunt neque feugiat vel. Etiam egestas aliquam neque sed
            pellentesque. In faucibus ultricies mi vitae tempor. Phasellus
            convallis sodales convallis. Nunc pellentesque ex vel est feugiat,
            at scelerisque sem ornare. Phasellus aliquet sed nunc ut euismod.
            Morbi vitae lacinia ex. Suspendisse eu blandit mauris, quis lacinia
            libero. In tristique eros varius nibh volutpat, at bibendum sapien
            tristique.
          </p>
          <p style={{ marginBottom: "5%" }}>
            Proin luctus urna quis risus varius, ut posuere sapien luctus.
            Suspendisse auctor orci eu elit molestie, nec suscipit justo
            scelerisque. Cras iaculis rutrum turpis nec blandit. Sed euismod
            cursus lacus eget mollis. Phasellus dignissim neque tellus, eu
            tempor ante auctor non. Aliquam hendrerit congue ornare. Morbi
            cursus orci et nulla faucibus feugiat. In quis mollis mauris. Mauris
            efficitur ultricies metus quis tempus. Nulla sit amet feugiat nunc,
            sit amet bibendum augue. Suspendisse potenti. Proin auctor eleifend
            eros, ac pretium est blandit sit amet. Fusce quis placerat lectus.
            Suspendisse sit amet lacinia quam. Aenean ut tellus dolor.
          </p>
        </DateTitleBody>
      </div>
    </Layout>
  );
};

export default About;
