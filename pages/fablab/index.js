import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import Layout from "../../components/layout";
import { TitleBody, ImgTitleBody } from "../../components/body-text";
import { CTA } from "../../components/buttons";
import ImgSlider from "../../components/image-slider";
import { Spacing } from "../../lib/spacing";
import { H1, H2, H3, P } from "../../lib/typography";
import { Colors } from "../../lib/colors";
import * as S from "../../lib/styles";

const Fablab = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      // add here scripts that need to be called on component will mount
    }
  });

  return (
    <Layout hamburger>
      <S.LargeContainer>
        <ScrollAnimation animateIn="fadeIn">
          <S.TitleBody width="100%">
            <H1 style={{ textAlign: "center" }}>RULES</H1>
            <P>
              1. The FabLab will be open to the student community and general
              public Monday to Friday from 9:00 a.m. to 6:00 p.m.
            </P>
            <P>
              2. Access will be granted to those who demonstrate the ability to
              operate any of the machines and tools in the lab. If you don’t
              have the knowledge required to do so, request assistance from the
              Fabrication Workshop coordinator beforehand.
            </P>
            <P>
              3. No part or piece of the laboratory equipment may be removed
              without the coordinator’s authorization.
            </P>
            <P>
              4. Altering or interfering with the status of any tool or machine
              is terminally prohibited.
            </P>
            <P>
              5. Any participant who mishandles or damages a tool will have the
              privilege of use suspended.
            </P>
            <P>
              6. The use of the Fabrication Lab machinery is strictly guided by
              the coordinator, which is why the direct supervision of him or one
              of the assistants will be required at all times.
            </P>
            <P>
              7. The use of specialized machines such as the CNC, 3D printer,
              Rholand Machine, Laser Cutter and Vinyl Printer must be
              coordinated by appointment beforehand.
            </P>
            <P>
              8. The digital machines must be used under the guidance of the
              supervisors of the workshop.
            </P>
            <P>
              9. Machines in movement - The user is responsible of taking the
              appropriate security measures during the operation of these
              machines. In addition, once the operation is finished, the user is
              responsible of staying put until the machines stop moving
              completely.
            </P>
            <P>10. The FabLab must be left completely clean after its use.</P>
            <P>11. Any damaged equipment should be reported immediately.</P>
            <P>
              12. Tool registry – The tools will be distributed particularly by
              the FabLab supervisors. Only the tools authorized for use are
              given to the participants and must be used one at a time.
            </P>
            <P>
              13. Check Out - Every borrowed tool must be returned to the FabLab
              staff before leaving.
            </P>
          </S.TitleBody>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <S.TitleBody width="100%">
            <H3 color={Colors.red}>IMPORTANT</H3>
            <P>
              14. Eye protection: Security goggles are required while remaining
              inside the lab.
            </P>
            <P>
              15. Respiratory protection:Participants must use a mask due to the
              harmful chemicals and additives that some materials may contain.
            </P>
            <P>
              16. Auditory protection: Hearing protection must be used when
              working with machines like the CNC which generate high noise
              levels.
            </P>
          </S.TitleBody>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <S.TitleBody width="100%">
            <H3>USERS</H3>
            <P>
              Orientation on how to effectively use the equipment in a way that
              safety is guaranteed will be given to users. Each person must
              complete a Security Test and sign the User Security Agreement. The
              Security Test and the Security Agreement must be presented to the
              director of FABLAB to grant the authorization for use. Upon
              completion of the Security Course, privileges of access will be
              issued to those who have completed it.
            </P>
            <P>
              Cleanliness – The user is responsible of cleaning their workspace
              and the machinery used before leaving the workshop.
            </P>
            <P>
              Food, drinks, tobacco, alcohol and drugs are not allowed in the
              workshop.
            </P>
            <P>
              Chemicals or adhesives in the form of a spray and flammable
              materials are also prohibited.
            </P>
            <P>
              Materials and user projects will not be stored in the laboratory.
              We are not responsible for unattended prototypes, materials or
              equipment inside the fabrication workshop.
            </P>
          </S.TitleBody>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <S.TitleBody width="100%">
            <H3>Dress code:</H3>
            <P>a) Long hair must be tied back and secured.</P>
            <P>
              b) Do not wear loose clothing. Sleeves must be rolled up and the
              loose shirt folds tucked in.
            </P>
            <P>c) Use long pants.</P>
            <P>
              d) Closed toe shoes are required. Sandals or any kind of rubber
              footwear such as Crocs are not accepted.
            </P>
            <P>
              e) It is prohibited to use jewelry, watches, earrings or any
              accessory while using the machines.
            </P>
          </S.TitleBody>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <S.TitleBody width="100%">
            <H3>Security</H3>
            <P>
              Accidents – Any accident that occurs in the workshop must be
              informed immediately to the supervisor or staff member in charge.
              Accidents that appear to be harmless or minor are always
              important. These accidents include personal damages as well as
              those done to the machines or tools.
            </P>
            <P>
              In case of emergency, dial 911 using the University’s phone
              number.
            </P>
            <P>
              First Aid – The first aid kit is found under the fabrication lab.
              There will be personnel ready to assist during the process.
            </P>
            <P>
              Danger – Anything that represents a potential risk must be
              addressed immediately.
            </P>
            <P>Fire – In case of fire, pull the emergency lever.</P>
          </S.TitleBody>
        </ScrollAnimation>
      </S.LargeContainer>
    </Layout>
  );
};

export default Fablab;
