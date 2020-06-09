import React, { Component } from 'react';
import styled from "styled-components";

class SignUp extends Component {
  render() {
    return (
      <SignUpContainer>
        SignUp
      </SignUpContainer>
    );
  }
}

const SignUpContainer = styled.div`
  text-align: center;
  color: ${props => props.theme.COLOR.USER_PRIMARY};
`;


export default SignUp;
