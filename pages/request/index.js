import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { H1 } from "../../lib/typography";
import { TitleBody } from "../../components/body-text";

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
        <TitleBody>
          At neeuko we pride ourselves on incorporating design in every aspect
          of our decision making and production efforts. For us, design is not
          only about making, is algo about thinking, questioning, and
          reinventing. Through our design courses we seek to inspire students to
          think about design as a form of questioning.Proin luctus urna quis
          risus varius, ut posuere sapien luctus. Suspendisse auctor orci eu
          elit molestie, nec suscipit justo scelerisque. Cras iaculis rutrum
          turpis nec blandit. Sed euismod cursus lacus eget mollis. Phasellus
          dignissim neque tellus, eu tempor ante auctor non. Aliquam hendrerit
          congue ornare. Morbi cursus orci et nulla faucibus feugiat. In quis
          mollis mauris. Mauris efficitur ultricies metus quis tempus. Nulla sit
          amet feugiat nunc, sit amet bibendum augue. Suspendisse potenti. Proin
          auctor eleifend eros, ac pretium est blandit sit amet. Fusce quis
          placerat lectus. Suspendisse sit amet lacinia quam. Aenean ut tellus
          dolor.
        </TitleBody>
      </div>
    </Layout>
  );
};

export default About;
