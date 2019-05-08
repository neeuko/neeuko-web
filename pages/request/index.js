import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';

import * as S from '../../lib/styles';
import Spacing from '../../lib/spacing';
import { H2, P, Li } from '../../lib/typography';
import Colors from '../../lib/colors';

import Layout from '../../components/layout';

const Request = () => {
  const [active, setActive] = useState('equipment');
  const [activeRequest, setActiveRequest] = useState(false);
  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePhone, setValuePhone] = useState('');
  const [valueTime, setValueTime] = useState('');
  const [valueDate, setValueDate] = useState('');
  const [mailStatus, setMailStatus] = useState(0);
  // EQUIPMENT
  const [valueRoland, setValueRoland] = useState(false);
  const [valuePrinter, setValuePrinter] = useState(false);
  // SERVICES
  const [valueInitial, setValueInitial] = useState(false);
  const [valueTechnical, setValueTechnical] = useState(false);
  const [valueCreative, setValueCreative] = useState(false);
  const [valueCommercial, setValueCommercial] = useState(false);
  const [valueWalkIn, setValueWalkIn] = useState(false);
  const [valueFab, setValueFab] = useState(false);
  // MEMBERSHIP
  const [valueBasic, setValueBasic] = useState(false);
  const [valuePremium, setValuePremium] = useState(false);
  const [valueVIP, setValueVIP] = useState(false);
  const [valueDesign, setValueDesign] = useState(false);
  const [valueFabrication, setValueFabrication] = useState(false);
  const [valueDesignFabrication, setValueDesignFabrication] = useState(false);

  // SUBMIT REQUEST
  const submitRequest = async () => {
    try {
      let valueMessage = '';
      // DATE
      valueMessage = valueMessage.concat('Date: ', valueDate, ' | ');
      // TIME
      valueMessage = valueMessage.concat('Time: ', valueTime, ' | ');
      // PHONE
      valueMessage = valueMessage.concat('Phone: ', valuePhone, ' | ');
      // EQUIPMENT
      valueRoland && (valueMessage = valueMessage.concat('Requested equipment: Roland - Versa Printer | '));
      valuePrinter && (valueMessage = valueMessage.concat('Requested equipment: 3D Printer | '));
      // SERVICES
      valueInitial && (valueMessage = valueMessage.concat('Requested service: Initial consultation | '));
      valueTechnical && (valueMessage = valueMessage.concat('Requested service: Technical consultancy | '));
      valueCreative && (valueMessage = valueMessage.concat('Requested service: Creative consultancy | '));
      valueCommercial && (valueMessage = valueMessage.concat('Requested service: Commercial consultancy | '));
      valueWalkIn && (valueMessage = valueMessage.concat('Requested service: Walk-ins | '));
      valueFab && (valueMessage = valueMessage.concat('Requested service: Basic FabLab | '));
      // MEMBERSHIP
      valueBasic && (valueMessage = valueMessage.concat('Requested membership: Basic | '));
      valuePremium && (valueMessage = valueMessage.concat('Requested membership: Premium | '));
      valueVIP && (valueMessage = valueMessage.concat('Requested membership: VIP | '));
      valueDesign && (valueMessage = valueMessage.concat('Requested membership: Design offer | '));
      valueFabrication && (valueMessage = valueMessage.concat('Requested membership: Fabrication offer | '));
      valueDesignFabrication && (valueMessage = valueMessage.concat('Requested membership: Design and Fabrication offer |'));

      
      if (valueName === '') {
        setMailStatus(0);
        return alert('Add a NAME');
      }
      if (valueEmail === '') {
        setMailStatus(0);
        return alert('Add a EMAIL');
      }
      if (valueTime === '') {
        setMailStatus(0);
        return alert('Add a TIME');
      }
      if (valueDate === '') {
        setMailStatus(0);
        return alert('Add a DATE');
      }
      if (valueMessage === '') {
        setMailStatus(0);
        return alert('Select an EQUIPMENT, SERVICE and/or MEMBERSHIP.');
      }

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'neeuko@sagrado.edu',
          from: valueEmail,
          subject: `${valueName.concat(' wants to make a request')}`,
          text: valueMessage,
        }),
      };

      const res = await fetch('https://send-email.mendezlenny.now.sh/api', options);
      // CLEAR VALUES
      // USER INFO
      setValueName('');
      setValueEmail('');
      setValuePhone('');
      setValueTime('');
      setValueDate('');
      // EQUIPMENT
      setValueRoland(false);
      setValuePrinter(false);
      // SERVICES
      setValueInitial(false);
      setValueTechnical(false);
      setValueCreative(false);
      setValueCommercial(false);
      setValueWalkIn(false);
      setValueFab(false);
      // MEMBERSHIP
      setValueBasic(false);
      setValuePremium(false);
      setValueVIP(false);
      setValueDesign(false);
      setValueFabrication(false);
      setValueDesignFabrication(false);
      
      return setMailStatus(res.status); // 200 = true, 502 = false
    } catch (err) {
      console.log('Error: ', err);
      alert('Server seems to be down. Please try later.');
      setMailStatus(502);
    }
  };

  const countRequest = () => {
    let count = 0;
    valueRoland && count++;
    valuePrinter && count++;
    valueBasic && count++;
    valuePremium && count++;
    valueVIP && count++;
    valueDesign && count++;
    valueFabrication && count++;
    valueDesignFabrication && count++;
    valueInitial && count++;
    valueTechnical && count++;
    valueCreative && count++;
    valueCommercial && count++;
    valueWalkIn && count++;
    valueFab && count++;
    return count;
  };

  const equipmentArray = () => {
    let arrayOfItems = [];
    valueRoland && arrayOfItems.push('Roland');
    valuePrinter && arrayOfItems.push('Printer');
    return arrayOfItems.map((item, index) => {
      if (item === 'Roland') {
        return (
          <div key={index.toString()} style={{ display: 'block' }}>
            <S.InputCheckbox type="checkbox" size="20pt" onChange={() => setValueRoland(!valueRoland)} checked={valueRoland} />
            <P style={{ display: 'inline-block' }}>{item}</P>
          </div>
        );
      }
      if (item === 'Printer') {
        return (
          <div key={index.toString()} style={{ display: 'block' }}>
            <S.InputCheckbox type="checkbox" size="20pt" onChange={() => setValuePrinter(!valuePrinter)} checked={valuePrinter} />
            <P style={{ display: 'inline-block' }}>{item}</P>
          </div>
        );
      }
      return <div key={index.toString()} />;
    });
  };

  const equipmentSelected = () => {
    let bool = false;
    valueRoland && (bool = true);
    valuePrinter && (bool = true);
    return bool;
  };

  const servicesArray = () => {
    let arrayOfItems = [];
    valueInitial && arrayOfItems.push('Initial');
    valueTechnical && arrayOfItems.push('Technical');
    valueCreative && arrayOfItems.push('Creative');
    valueCommercial && arrayOfItems.push('Commercial');
    valueWalkIn && arrayOfItems.push('Walk In');
    valueFab && arrayOfItems.push('Fab');
    return arrayOfItems.map((item, index) => {
      if (item === 'Initial') {
        return (
          <div key={index.toString()} style={{ display: 'block' }}>
            <S.InputCheckbox type="checkbox" size="20pt" onChange={() => setValueInitial(!valueInitial)} checked={valueInitial} />
            <P style={{ display: 'inline-block' }}>{item}</P>
          </div>
        );
      }
      if (item === 'Technical') {
        return (
          <div key={index.toString()} style={{ display: 'block' }}>
            <S.InputCheckbox type="checkbox" size="20pt" onChange={() => setValueTechnical(!valueTechnical)} checked={valueTechnical} />
            <P style={{ display: 'inline-block' }}>{item}</P>
          </div>
        );
      }
      if (item === 'Creative') {
        return (
          <div key={index.toString()} style={{ display: 'block' }}>
            <S.InputCheckbox type="checkbox" size="20pt" onChange={() => setValueCreative(!valueCreative)} checked={valueCreative} />
            <P style={{ display: 'inline-block' }}>{item}</P>
          </div>
        );
      }
      if (item === 'Commercial') {
        return (
          <div key={index.toString()} style={{ display: 'block' }}>
            <S.InputCheckbox type="checkbox" size="20pt" onChange={() => setValueCommercial(!valueCommercial)} checked={valueCommercial} />
            <P style={{ display: 'inline-block' }}>{item}</P>
          </div>
        );
      }
      if (item === 'Walk In') {
        return (
          <div key={index.toString()} style={{ display: 'block' }}>
            <S.InputCheckbox type="checkbox" size="20pt" onChange={() => setValueWalkIn(!valueWalkIn)} checked={valueWalkIn} />
            <P style={{ display: 'inline-block' }}>{item}</P>
          </div>
        );
      }
      if (item === 'Fab') {
        return (
          <div key={index.toString()} style={{ display: 'block' }}>
            <S.InputCheckbox type="checkbox" size="20pt" onChange={() => setValueFab(!valueFab)} checked={valueFab} />
            <P style={{ display: 'inline-block' }}>{item}</P>
          </div>
        );
      }
      return <div key={index.toString()} />;
    });
  };

  const servicesSelected = () => {
    let bool = false;
    valueInitial && (bool = true);
    valueTechnical && (bool = true);
    valueCreative && (bool = true);
    valueCommercial && (bool = true);
    valueWalkIn && (bool = true);
    valueFab && (bool = true);
    return bool;
  };

  const membershipArray = () => {
    const arrayOfItems = [];
    valueBasic && arrayOfItems.push('Basic');
    valuePremium && arrayOfItems.push('Premium');
    valueVIP && arrayOfItems.push('VIP');
    valueDesign && arrayOfItems.push('Design');
    valueFabrication && arrayOfItems.push('Fabrication');
    valueDesignFabrication && arrayOfItems.push('Design Fabrication');
    return arrayOfItems.map((item, index) => {
      if (item === 'Basic') {
        return (
          <div key={index.toString()} style={{ display: 'block' }}>
            <S.InputCheckbox type="checkbox" size="20pt" onChange={() => setValueBasic(!valueBasic)} checked={valueBasic} />
            <P style={{ display: 'inline-block' }}>{item}</P>
          </div>
        );
      }
      if (item === 'Premium') {
        return (
          <div key={index.toString()} style={{ display: 'block' }}>
            <S.InputCheckbox type="checkbox" size="20pt" onChange={() => setValuePremium(!valuePremium)} checked={valuePremium} />
            <P style={{ display: 'inline-block' }}>{item}</P>
          </div>
        );
      }
      if (item === 'VIP') {
        return (
          <div key={index.toString()} style={{ display: 'block' }}>
            <S.InputCheckbox type="checkbox" size="20pt" onChange={() => setValueVIP(!valueVIP)} checked={valueVIP} />
            <P style={{ display: 'inline-block' }}>{item}</P>
          </div>
        );
      }
      if (item === 'Design') {
        return (
          <div key={index.toString()} style={{ display: 'block' }}>
            <S.InputCheckbox type="checkbox" size="20pt" onChange={() => setValueDesign(!valueDesign)} checked={valueDesign} />
            <P style={{ display: 'inline-block' }}>{item}</P>
          </div>
        );
      }
      if (item === 'Fabrication') {
        return (
          <div key={index.toString()} style={{ display: 'block' }}>
            <S.InputCheckbox type="checkbox" size="20pt" onChange={() => setValueFabrication(!valueFabrication)} checked={valueFabrication} />
            <P style={{ display: 'inline-block' }}>{item}</P>
          </div>
        );
      }
      if (item === 'Design Fabrication') {
        return (
          <div key={index.toString()} style={{ display: 'block' }}>
            <S.InputCheckbox type="checkbox" size="20pt" onChange={() => setValueDesignFabrication(!valueDesignFabrication)} checked={valueDesignFabrication} />
            <P style={{ display: 'inline-block' }}>{item}</P>
          </div>
        );
      }
    });
  };

  const membershipSelected = () => {
    let bool = false;
    valueBasic && (bool = true);
    valuePremium && (bool = true);
    valueVIP && (bool = true);
    valueDesign && (bool = true);
    valueFabrication && (bool = true);
    valueDesignFabrication && (bool = true);
    return bool;
  };

  return (
    <Layout hamburger>
      <S.LargeContainer>

        {/* NAVIGATION */}
        {activeRequest ? (<S.ButtonBack type="button" onClick={() => setActiveRequest(false)} />)
          : (
            <S.LeftBlock width="20%" style={{ marginBottom: Spacing.lg }}>
              <S.ButtonBorder type="button" onClick={() => setActive('equipment')} border={active === 'equipment'}>
                equipment
              </S.ButtonBorder>
              <S.ButtonBorder type="button" onClick={() => setActive('services')} border={active === 'services'}>
                services
              </S.ButtonBorder>
              <S.ButtonBorder type="button" onClick={() => setActive('membership')} border={active === 'membership'}>
                membership
              </S.ButtonBorder>
            </S.LeftBlock>
          )}

        {/* EQUIPMENT */}
        {!activeRequest && active === 'equipment' && (
          <S.RightBlock width="80%">

            {/* HEADER */}
            <H2 color={Colors.blue} style={{ marginBottom: Spacing.md }}>Machines with cost of materials included:</H2>
            <P>The following prices are approximate and will change depending on the amount of materials used. Both prices are above normal and the actual price does not exceed them.</P>
            
            {/* PRINTER */}
            <S.ImgBorder src="../../static/images/printer.jpg" alt="Printer" />
            <S.InputCheckbox type="checkbox" onChange={() => setValuePrinter(!valuePrinter)} checked={valuePrinter} />
            <H2 style={{ marginBottom: Spacing.md, display: 'inline-block' }}>3D PRINTER</H2>
            <Li style={{ marginLeft: Spacing.md }}>$15 for 30 minutes</Li>
            <Li style={{ marginBottom: Spacing.xl, marginLeft: Spacing.md }}>$7.50 per cubic inch + $7.50 per half hour of printing</Li>

            {/* ROLAND */}
            <S.ImgBorder src="../../static/images/roland.jpg" alt="Roland" />
            <S.InputCheckbox type="checkbox" onChange={() => setValueRoland(!valueRoland)} checked={valueRoland} />
            <H2 style={{ marginBottom: Spacing.md, display: 'inline-block' }}>ROLAND - VERSA PRINTER</H2>
            <Li style={{ marginLeft: Spacing.md }}>$1.35 per minute of printing</Li>
            <Li style={{ marginLeft: Spacing.md }}>$7.50 per cubic inch + $7.50 per half hour of printing</Li>

            {/* HEADER */}
            {/* <H2 color={Colors.blue} style={{ margin: `${Spacing.lg} 0 ${Spacing.md} 0` }}>Machines without cost of materials included:</H2>
            <P>The following prices are approximate and will change depending on the amount of materials used. Both prices are above normal and the actual price does not exceed them.</P> */}
          </S.RightBlock>
        )}

        {/* SERVICES */}
        {!activeRequest && active === 'services' && (
          <S.RightBlock width="80%">

            <S.InputCheckbox type="checkbox" onChange={() => setValueInitial(!valueInitial)} checked={valueInitial} />
            <H2 style={{ marginBottom: Spacing.md, display: 'inline-block' }}>
              Initial consultation:
            </H2>
            <P>Two free initial 30-minute interviews per client are offered. If you wish to continue the project and need more consultation, you will be charged for the additional services.</P>

            <S.InputCheckbox type="checkbox" onChange={() => setValueTechnical(!valueTechnical)} checked={valueTechnical} />
            <H2 style={{ marginBottom: Spacing.md, display: 'inline-block' }}>
              Technical consultancy:
            </H2>
            <P>$50 per hour.</P>

            <S.InputCheckbox type="checkbox" onChange={() => setValueCreative(!valueCreative)} checked={valueCreative} />
            <H2 style={{ marginBottom: Spacing.md, display: 'inline-block' }}>
              Creative consultancy:
            </H2>
            <P>$50 per hour.</P>

            <S.InputCheckbox type="checkbox" onChange={() => setValueCommercial(!valueCommercial)} checked={valueCommercial} />
            <H2 style={{ marginBottom: Spacing.md, display: 'inline-block' }}>Commercial consultancy:</H2>
            <P>$65 per hour.</P>

            {/* <S.InputCheckbox type="checkbox" onChange={() => setValueWalkIn(!valueWalkIn)} checked={valueWalkIn} />
            <H2 style={{ marginBottom: Spacing.md, display: 'inline-block' }}>Walk-ins:</H2>
            <P>Falta esta información, no sale.</P> */}

            <S.InputCheckbox type="checkbox" onChange={() => setValueFab(!valueFab)} checked={valueFab} />
            <H2 style={{ marginBottom: Spacing.md, display: 'inline-block' }}>Basic FabLab:</H2>
            <P>$1 per minute, does not include the use of specialized machines.</P>

            {/* <H2 style={{ marginBottom: Spacing.md, display: 'inline-block' }}>Price per project and discrete printing:</H2>
            <P>Falta esta información, no sale.</P> */}
            <P>
              <span style={{ color: 'red' }}>*</span>
              The prices mentioned are subject to change and are provided exclusively for information purposes. To receive an accurate and full invoice, you must schedule an appointment to know the specific needs of your project.
            </P>
          </S.RightBlock>
        )}

        {/* MEMBERSHIP */}
        {!activeRequest && active === 'membership' && (
          <S.RightBlock width="80%">
            <H2 color={Colors.blue} style={{ marginBottom: Spacing.lg }}>General Offer</H2>
            <P>The following prices are for general clients. The following types of clients receive the discounts provided on the parenthesis. These price reductions are not cumulative and the higher discount will be applied during situations in which the client belongs to more than one group.</P>

            <Li style={{ marginLeft: Spacing.md, marginBottom: Spacing.md }}>
              <strong>Universidad de Sagrado Corazón students - </strong>(50% reduction) It is required to present the official student ID, student number, student email.
            </Li>

            <Li style={{ marginLeft: Spacing.md, marginBottom: Spacing.md }}>
              <strong>Students from other universities and members of the community – </strong>(25% reduction) Documents and identification information is needed. Students: student ID & the official .edu email.
              Community member: Residency evidence, utility (electricity and water) or rent bills.
            </Li>

            <Li style={{ marginLeft: Spacing.md, marginBottom: Spacing.md }}>
              <strong>Military, seniors and educators - </strong>(25% reduction) An ID or any other form of identification is required.
            </Li>

            <H2 color={Colors.blue} style={{ margin: `${Spacing.xl} 0 ${Spacing.lg} 0` }}>MEMBERSHIPS</H2>

            <S.InputCheckbox type="checkbox" onChange={() => setValueBasic(!valueBasic)} checked={valueBasic} />
            <H2 style={{ marginBottom: Spacing.md, display: 'inline-block' }}>Basic: $150</H2>
            <Li style={{ marginLeft: Spacing.md }}>5 hours each month to use FabLab including the specialized machines.</Li>
            <Li style={{ marginLeft: Spacing.md }}>15% discount on extra hours (this discount is not cumulative with others).</Li>
            <Li style={{ marginLeft: Spacing.md, marginBottom: Spacing.lg }}>1 hour of general consultancy + 1 hour of technical, creative or commercial consultancy.</Li>

            <S.InputCheckbox type="checkbox" onChange={() => setValuePremium(!valuePremium)} checked={valuePremium} />
            <H2 style={{ marginBottom: Spacing.md, display: 'inline-block' }}>Premium: $300</H2>
            <Li style={{ marginLeft: Spacing.md }}>12 each month to use the FabLab including the specialized machines.</Li>
            <Li style={{ marginLeft: Spacing.md }}>20% discount on extra hours (this discount is not cumulative with others).</Li>
            <Li style={{ marginLeft: Spacing.md, marginBottom: Spacing.lg }}>1 hour of general consultancy + 2 hours of technical, creative or commercial consultancy.</Li>

            <S.InputCheckbox type="checkbox" onChange={() => setValueVIP(!valueVIP)} checked={valueVIP} />
            <H2 style={{ marginBottom: Spacing.md, display: 'inline-block' }}>VIP: $750</H2>
            <Li style={{ marginLeft: Spacing.md }}>20 hours each month to use the FabLab including the specialized machines.</Li>
            <Li style={{ marginLeft: Spacing.md }}>25% discount on extra hours (this discount is not cumulative with others).</Li>
            <Li style={{ marginLeft: Spacing.md }}>1 hour of general consultancy + 2 hours of technical, creative or commercial consultancy.</Li>

            <H2 color={Colors.blue} style={{ margin: `${Spacing.xl} 0 ${Spacing.lg} 0` }}>Design and Fabrication offers:</H2>

            <S.InputCheckbox type="checkbox" onChange={() => setValueDesign(!valueDesign)} checked={valueDesign} />
            <H2 style={{ marginBottom: Spacing.md, display: 'inline-block' }}>Design offer: $100</H2>
            <Li style={{ marginLeft: Spacing.md }}>1 hour of design consultancy each month.</Li>
            <Li style={{ marginLeft: Spacing.md }}>1 design change included. For additional changes, you will be charged $50 per hour.</Li>
            <Li style={{ marginLeft: Spacing.md }}>5 hours each month to use the FabLab including the specialized machines.</Li>
            <Li style={{ marginLeft: Spacing.md, marginBottom: Spacing.lg }}>15% discount on extra hours (this discount is not cumulative with others).</Li>

            <S.InputCheckbox type="checkbox" onChange={() => setValueFabrication(!valueFabrication)} checked={valueFabrication} />
            <H2 style={{ marginBottom: Spacing.md, display: 'inline-block' }}>Fabrication offer: $250</H2>
            <Li style={{ marginLeft: Spacing.md }}>1 hour of design consultancy each month.</Li>
            <Li style={{ marginLeft: Spacing.md }}>2 design changes included. For additional changes, you will be charged $50 per hour.</Li>
            <Li style={{ marginLeft: Spacing.md }}>8 hours each month to use the FabLab included.</Li>
            <Li style={{ marginLeft: Spacing.md, marginBottom: Spacing.lg }}>20% discount on extra hours (this discount is not cumulative with others).</Li>

            <S.InputCheckbox type="checkbox" onChange={() => setValueDesignFabrication(!valueDesignFabrication)} checked={valueDesignFabrication} />
            <H2 style={{ marginBottom: Spacing.md, display: 'inline-block' }}>Design and Fabrication offer: $500<br />(monthly)</H2>
            <Li style={{ marginLeft: Spacing.md }}>2 hours of design consultancy each month.</Li>
            <Li style={{ marginLeft: Spacing.md }}>3 design changes included. For additional changes, you will be charged $50 per hour.</Li>
            <Li style={{ marginLeft: Spacing.md }}>16 hours each month to use the FabLab included.</Li>

          </S.RightBlock>
        )}

        {/* REQUEST */}
        {activeRequest && (
          <S.LeftBlock width="50%">
            <H2 color={Colors.blue} style={{ marginBottom: Spacing.lg }}>REQUEST CHECKOUT</H2>
            <S.InputText type="text" placeholder="NAME" value={valueName} onChange={e => setValueName(e.target.value)} />
            <S.InputText type="email" placeholder="EMAIL" value={valueEmail} onChange={e => setValueEmail(e.target.value)} />
            <S.InputText type="text" placeholder="PHONE (OPTIONAL)" style={{ marginBottom: Spacing.lg }} value={valuePhone} onChange={e => setValuePhone(e.target.value)} />
            <P color={Colors.grey} style={{ marginBottom: Spacing.sm }}>TIME</P>
            <S.InputText type="time" value={valueTime} onChange={e => setValueTime(e.target.value)} />
            <P color={Colors.grey} style={{ marginBottom: Spacing.sm }}>DATE</P>
            <S.InputText type="date" value={valueDate} onChange={e => setValueDate(e.target.value)} />
          </S.LeftBlock>
        )}
        {activeRequest && (
          <S.RightBlock width="50%">
            <H2 style={{ marginBottom: Spacing.lg }}>REQUEST OVERVIEW:</H2>
            {equipmentSelected() && (
              <S.DivBorder>
                <H2 style={{ marginBottom: Spacing.md }}>EQUIPMENT SELECTED</H2>
                {equipmentArray()}
              </S.DivBorder>
            )}
            {servicesSelected() && (
              <S.DivBorder>
                <H2 style={{ marginBottom: Spacing.md }}>SERVICES SELECTED</H2>
                {servicesArray()}
              </S.DivBorder>
            )}
            {membershipSelected() && (
              <S.DivBorder>
                <H2 style={{ marginBottom: Spacing.md }}> MEMBERSHIP SELECTED</H2>
                {membershipArray()}
              </S.DivBorder>
            )}
          </S.RightBlock>
        )}
        {activeRequest ? <S.CTA onClick={() => { setMailStatus(100); submitRequest(); }} style={{ float: 'right', marginTop: Spacing.sm }}><H2 color={Colors.white} style={{ padding: '5pt 20pt', textAlign: 'center' }}>{mailStatus == 0 ? 'SEND REQUEST' : mailStatus == 100 ? 'SENDING...' :  mailStatus == 200 ? 'SENT' : 'REQUEST FAIL'}</H2></S.CTA>
        : <S.CTA onClick={() => setActiveRequest(true)} style={{ float: 'right', marginTop: Spacing.lg }}><H2 color={Colors.white} style={{ padding: '5pt 20pt', textAlign: 'center' }}>REQUEST [{countRequest()}]</H2></S.CTA>}
      </S.LargeContainer>
    </Layout>
  );
};

export default Request;
