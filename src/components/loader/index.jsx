import React from "react";
import styled from "styled-components";
import { BounceLoader } from "react-spinners";

class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <LoaderContainer className="sweet-loading">
        <BounceLoader
          sizeUnit={"px"}
          size={this.props.size}
          margin={"2px"}
          loading={this.state.loading}
        />
      </LoaderContainer>
    );
  }
}

AwesomeComponent.defaultProps = {
  size: 50
};

const LoaderContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: calc(50% - 50px);
  left: calc(50%);
  transform: translate(-50%, -50%);
  > div > div {
    background-color: ${props =>
      (props.theme &&
        Object.keys(props.theme).length !== 0 &&
        props.theme.COLOR.USER_PRIMARY) ||
      "#ddd"};
  }
`;

export default AwesomeComponent;
