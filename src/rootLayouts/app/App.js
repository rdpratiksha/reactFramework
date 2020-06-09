import React, { Component } from 'react';
import styled from "styled-components";
import Loader from "../../components/loader"

class App extends Component {
  componentDidMount() {
    let checkIfUserLoggedIn = false;
      // localStorage.getItem("userData")
    if(checkIfUserLoggedIn){
      this.props.history.push("/home");
    } else {
      this.props.history.push("/signIn");
    }
  }

  render(){
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }
}

const LoaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${props => props.theme.COLOR.CONTAINER};
  z-index: 30;
`;

export default App;
