import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { H1, H4, P } from "../../lib/typography";
import { TitleBody, ImgTitleBody } from "../../components/body-text";
import { CTA } from "../../components/buttons";
import ImgSlider from "../../components/image-slider";
import { Spacing } from "../../lib/spacing";

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
        <TitleBody display="block" width="70%" title="ABOUT">
          Lorem Ipsum At neeuko we pride ourselves on incorporating design in
          every aspect of our decision making and production efforts. For us,
          design is not only about making, is algo about thinking, questioning,
          and reinventing. Through our design courses we seek to inspire
          students to think about design as a form of questioning.Proin luctus
          urna quis risus varius, ut posuere sapien luctus. Suspendisse auctor
          orci eu elit molestie, nec suscipit justo scelerisque. Cras iaculis
          rutrum turpis nec blandit. Sed euismod cursus lacus eget mollis.
          Phasellus dignissim neque tellus, eu tempor ante auctor non. Aliquam
          hendrerit congue ornare. Morbi cursus orci et nulla faucibus feugiat.
          In quis mollis mauris. Mauris efficitur ultricies metus quis tempus.
          Nulla sit amet feugiat nunc, sit amet bibendum augue. Suspendisse
          potenti. Proin auctor eleifend eros, ac pretium est blandit sit amet.
          Fusce quis placerat lectus. Suspendisse sit amet lacinia quam. Aenean
          ut tellus dolor.
        </TitleBody>
        <TitleBody display="block" width="70%" title="RULES">
          <ol>
            <li>
              The FabLab will be open to the student community and general
              public Mond ay to Friday from 9:00 a.m. to 6:00 p.m.
            </li>
            <li>
              Access will be granted to those who demonstrate the ability to
              operate any of the machines and tools in the lab. If you don’t
              have the knowledge required to do so, request assistance from the
              Fabrication Workshop coordinator beforehand.
            </li>
            <li>
              No part or piece of the laboratory equipment may be removed
              without the coordinator’s authorization.
            </li>
            <li>
              Altering or interfering with the status of any tool or machine is
              terminally prohibited.
            </li>
            <li>
              Any participant who mishandles or damages a tool will have the
              privilege of use suspended.
            </li>
            <li>
              The use of the Fabrication Lab machinery is strictly guided by the
              coordinator, which is why the direct supervision of him or one of
              the assistants will be required at all times.
            </li>
            <li>
              The use of specialized machines such as the CNC, 3D printer,
              Rholand Machine, Laser Cutter and Vinyl Printer must be
              coordinated by appointment beforehand.
            </li>
            <li>
              The digital machines must be used under the guidance of the
              supervisors of the workshop.
            </li>
            <li>
              Machines in movement - The user is responsible of taking the
              appropriate security measures during the operation of these
              machines. In addition, once the operation is finished, the user is
              responsible of staying put until the machines stop moving
              completely.
            </li>
            <li>The FabLab must be left completely clean after its use.</li>
            <li>Any damaged equipment should be reported immediately. </li>
            <li>
              Tool registry – The tools will be distributed particularly by the
              FabLab supervisors. Only the tools authorized for use are given to
              the participants and must be used one at a time.
            </li>
            <li>
              Check Out - Every borrowed tool must be returned to the FabLab
              staff before leaving.
            </li>

            <h4>IMPORTANT</h4>

            <li>
              Eye protection: Security goggles are required while remaining
              inside the lab.
            </li>
            <li>
              Respiratory protection:Participants must use a mask due to the
              harmful chemicals and additives that some materials may contain.
            </li>
            <li>
              Auditory protection: Hearing protection must be used when working
              with machines like the CNC which generate high noise levels.
            </li>
          </ol>
        </TitleBody>
        <TitleBody display="block" width="70%" textAlign="left" title="Users">
          Orientation on how to effectively use the equipment in a way that
          safety is guaranteed will be given to users. Each person must complete
          a Security Test and sign the User Security Agreement. The Security
          Test and the Security Agreement must be presented to the director of
          FABLAB to grant the authorization for use. Upon completion of the
          Security Course, privileges of access will be issued to those who have
          completed it. Cleanliness – The user is responsible of cleaning their
          workspace and the machinery used before leaving the workshop.Food,
          drinks, tobacco, alcohol and drugs are not allowed in the
          workshop.Chemicals or adhesives in the form of a spray and flammable
          materials are also prohibited.Materials and user projects will not be
          stored in the laboratory. We are not responsible for unattended
          prototypes, materials or equipment inside the fabrication workshop.
        </TitleBody>
        <TitleBody
          display="block"
          width="70%"
          textAlign="left"
          title="Dress code:"
        >
          <ol type="a">
            <li>Long hair must be tied back and secured. </li>
            <li>
              Do not wear loose clothing. Sleeves must be rolled up and the
              loose shirt folds tucked in.
            </li>
            <li> Use long pants. </li>
            <li>
              Closed toe shoes are required. Sandals or any kind of rubber
              footwear such as Crocs are not accepted.
            </li>
            <li>
              It is prohibited to use jewelry, watches, earrings or any
              accessory while using the machines.
            </li>
          </ol>
        </TitleBody>

        <TitleBody
          display="block"
          width="70%"
          textAlign="left"
          title="Security"
        >
          <ul>
            <li>
              Accidents – Any accident that occurs in the workshop must be
              informed immediately to the supervisor or staff member in charge.
              Accidents that appear to be harmless or minor are always
              important. These accidents include personal damages as well as
              those done to the machines or tools.
            </li>
            <li>
              In case of emergency, dial 911 using the University’s phone
              number.
            </li>
            <li>
              First Aid – The first aid kit is found under the fabrication lab.
              There will be personnel ready to assist during the process.
            </li>
            <li>
              Danger – Anything that represents a potential risk must be
              addressed immediately.
            </li>
            <li>Fire – In case of fire, pull the emergency lever. </li>
          </ul>
        </TitleBody>
      </div>
      <div style={{ textAlign: "center", margin: Spacing.xl }}>
        <CTA onClick={() => console.log("success!")}>EQUIPMENT COST & USE</CTA>
      </div>
      <ImgSlider style={{ margin: "30pt 0" }} />
      {/* Begin Service button and the ImgTitleBody div */}

      <div style={{ textAlign: "center", marginTop: "50pt" }}>
        <CTA onClick={() => console.log("success!")}>SERVICES</CTA>
      </div>
      <div>
        <ImgTitleBody padding="5% 50px 85px" width="33.3%" title="SERVICE ICON">
          <P>
            At Sagrado Corazón, The Collaborative Innovation Center: Neeuko has
            a team of multidisciplinary design facilitators, technology, and
            infrastructure that gives visionaries access to product development
            resources so they can achieve their dreams.
          </P>
        </ImgTitleBody>
        <ImgTitleBody padding="5% 50px 85px" width="33.3%" title="SERVICE ICON">
          <P>
            At Sagrado Corazón, The Collaborative Innovation Center: Neeuko has
            a team of multidisciplinary design facilitators, technology, and
            infrastructure that gives visionaries access to product development
            resources so they can achieve their dreams.
          </P>
        </ImgTitleBody>
        <ImgTitleBody padding="5% 50px 85px" width="33.3%" title="SERVICE ICON">
          <P>
            At Sagrado Corazón, The Collaborative Innovation Center: Neeuko has
            a team of multidisciplinary design facilitators, technology, and
            infrastructure that gives visionaries access to product development
            resources so they can achieve their dreams.
          </P>
        </ImgTitleBody>
      </div>
      <div>
        <div style={{ textAlign: "center", marginBottom: Spacing.xl }}>
          <CTA onClick={() => console.log("success!")}>MEMBERSHIP</CTA>
        </div>
        <P style={{ width: "70%", display: "block" }}>
          fablababoutrulesLorem Ipsum At neeuko we pride ourselves on
          incorporating design in every aspect of our decision making and
          production efforts. For us, design is not only about making, is algo
          about thinking, questioning, and reinventing. Through our design
          courses we seek to inspire students to think about design as a form of
          questioning.Proin luctus urna quis risus varius, ut posuere sapien
          luctus. Suspendisse auctor orci eu elit molestie, nec suscipit justo
          scelerisque. Cras iaculis rutrum turpis nec blandit. Sed euismod
          cursus lacus eget mollis. Phasellus dignissim neque tellus, eu tempor
          ante auctor non.
        </P>
      </div>
    </Layout>
  );
};

export default About;
