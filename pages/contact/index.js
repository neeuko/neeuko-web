import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import * as S from '../../lib/styles';
import { H1, P } from '../../lib/typography';
import Layout from '../../components/layout';
import { CTA } from '../../components/buttons';

const Contact = () => {
  const [valueEmail, setValueEmail] = useState('');
  const [valueSubject, setValueSubject] = useState('');
  const [valueMessage, setValueMessage] = useState('');
  const [mailStatus, setMailStatus] = useState(0);

  // SUBMIT REQUEST
  const submitRequest = async () => {
    try {
      if (valueEmail === '') {
        setMailStatus(0);
        return alert('Add a EMAIL');
      }
      if (valueSubject === '') {
        setMailStatus(0);
        return alert('Add a SUBJECT');
      }
      if (valueMessage === '') {
        setMailStatus(0);
        return alert('Add a MESSAGE');
      }
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'neeuko@sagrado.edu',
          from: valueEmail,
          subject: valueSubject,
          text: valueMessage,
        }),
      };
  
      const res = await fetch('https://send-email.mendezlenny.now.sh/api', options);
      // CLEAR VALUES
      setValueEmail('');
      setValueSubject('');
      setValueMessage('');
      
      return setMailStatus(res.status); // 200 = true, 502 = false
    } catch (err) {
      console.log('Error: ', err);
      alert('Server seems to be down. Please try later.');
      setMailStatus(502);
    }
  };

  return (
    <Layout hamburger>
      <S.LargeContainer>
        <ScrollAnimation animateIn="fadeIn">
          <H1>LET'S TALK</H1>
          <S.LeftBlock>
            <S.InputText
              placeholder="Email"
              type="text"
              value={valueEmail}
              onChange={e => setValueEmail(e.target.value)}
            />
            <S.InputText
              placeholder="Subject"
              type="text"
              value={valueSubject}
              onChange={e => setValueSubject(e.target.value)}
            />
            <S.TextArea
              placeholder="Message"
              type="text-area"
              value={valueMessage}
              onChange={e => setValueMessage(e.target.value)}
            />
            <S.BtnContainer>
              <CTA
                onClick={() => { setMailStatus(100); submitRequest(); }}
              >
                {mailStatus == 0 ? 'SEND MESSAGE' : mailStatus == 100 ? 'SENDING...' :  mailStatus == 200 ? 'SENT' : 'MESSAGE FAIL'}
              </CTA>
            </S.BtnContainer>
          </S.LeftBlock>
          <S.RightBlock>
            <P>
              At neeuko we pride ourselves on incorporating design in every
              aspect of our decision making and production efforts. For us,
              design is not only about making, is also about thinking,
              questioning, and reinventing. Through our design courses we seek
              to inspire students to think about design as a form of
              questioning.
            </P>
          </S.RightBlock>

          {/* MAP */}

          <S.LeftBlock width="64%" marginBottom="0">
            <S.Map src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1892.4570432014812!2d-66.06042086644761!3d18.442209545963106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8c0368b2c85ecc9f%3A0xc3c29d438c23ee65!2sSagrado+Coraz%C3%B3n+%2F+Monteflores%2C+San+Juan!3m2!1d18.4425939!2d-66.0589925!5e0!3m2!1sen!2spr!4v1552539828795" />
          </S.LeftBlock>
          <S.RightBlock width="36%" marginBottom="0">
            <H1>OUR LOCATION</H1>
            <P>
              463, 413 Calle Bouret,
              <br />
              San Juan, 00912
            </P>
          </S.RightBlock>
        </ScrollAnimation>
      </S.LargeContainer>
    </Layout>
  );
};

export default Contact;
