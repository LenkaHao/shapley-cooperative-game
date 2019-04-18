import React, { Component } from 'react';
import styled from 'styled-components';
import Shapley from './Shapley';
import Core from './Core';

const MainContainer = styled.div`
  background-color: lightgray;
  /* height: 100vh; */
  /* width: 100vw; */
`;

const GamePicker = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: blue;
  border: 1px solid #0000007a;
  color: white;
  padding: 5px;
`;

class Main extends Component {
  state = { shapleyValue: true };

  gameChanger = () => {
    const shapleyValue = this.state.shapleyValue;
    this.setState({
      shapleyValue: !shapleyValue,
    });
  };

  render() {
    return (
      <MainContainer>
        <GamePicker onClick={this.gameChanger}>Change Game</GamePicker>
        {/* <Core /> */}
        {this.state.shapleyValue ? <Shapley /> : <Core />}
      </MainContainer>
    );
  }
}

export default Main;
