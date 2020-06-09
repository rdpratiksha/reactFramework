import React from 'react';
import styled from "styled-components";

const Error = (props) => {
  return (
    <ErrorContainer>
      404
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  text-align: center;
  color: ${props => props.theme.COLOR.USER_PRIMARY};
`;


export default Error;
