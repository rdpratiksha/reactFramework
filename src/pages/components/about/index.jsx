import React from 'react';
import styled from "styled-components";
import Container from "../../container";

const About = (props) => {
  return (
    <AboutContainer>
      About
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  text-align: center;
  color: ${props => props.theme.COLOR.USER_PRIMARY};
`;

export default Container(About);
