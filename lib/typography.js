import styled from 'styled-components';
import Colors from './colors';
import Spacing from './spacing';

export const H1 = styled.h1`
  font-size: 1.3rem;
  font-family: "Fjalla One", sans-serif;
  font-weight: 400;
  color: ${props => props.color || Colors.black};

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const H2 = styled.h2`
  font-size: 1.2rem;
  font-family: "Fjalla One", sans-serif;
  font-weight: 400;
  color: ${props => props.color || Colors.black};
  margin: ${Spacing.xs} 0;
  margin-bottom: ${props => props.marginBottom || '0'};
  text-align: ${props => props.textAlign || 'left'};

  @media only screen and (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const H3 = styled.h3`
  font-size: 1rem;
  font-family: "Fjalla One", sans-serif;
  font-weight: 400;
  color: ${props => props.color || Colors.black};

  @media only screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const H4 = styled.h4`
  font-size: 0.8rem;
  font-family: "Fjalla One", sans-serif;
  font-weight: 400;
  color: ${props => props.color || Colors.black};

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const P = styled.p`
  font-size: 1rem;
  font-family: “Nunito”, sans-serif;
  font-weight: 400;
  color: ${props => props.color || Colors.black};
`;

export const A = styled.a`
  font-size: 1.1rem;
  font-family: "Fjalla One", sans-serif;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;
  color: ${props => props.color || Colors.black};

  @media only screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Li = styled.li`
  font-size: 1rem;
  font-family: "Fjalla One", sans-serif;
  font-weight: 400;
  color: ${props => props.color || Colors.black};
`;
