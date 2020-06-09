import React from 'react';
import styled from "styled-components";

const Footer = (props) => {
  return (
    <FooterContainer>
      Footer
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  text-align: center;
  color: ${props => props.theme.COLOR.USER_PRIMARY};
`;

export default Footer;
