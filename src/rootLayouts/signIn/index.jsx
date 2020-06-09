import React, { Component } from 'react';
import styled from "styled-components";

class SignIn extends Component {
  render() {
    return (
      <SignInContainer>
        signin
      </SignInContainer>
    );
  }
}

const SignInContainer = styled.div`
  text-align: center;
  color: ${props => props.theme.COLOR.USER_PRIMARY};
`;


export default SignIn;
