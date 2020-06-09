import React from 'react';
import styled from "styled-components";
import Container from "../../container";

const Home = (props) => {
  return (
    <HomeContainer>
      home
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  text-align: center;
  color: ${props => props.theme.COLOR.USER_PRIMARY};
`;

export default Container(Home);
