import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <HeaderContainer>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  text-align: center;
  color: ${props => props.theme.COLOR.USER_PRIMARY};
`;

export default Header;
