import React, { Component } from 'react';
import styled from 'styled-components';
import AddKey from './AddKey';
import AddCoreValues from './AddCoreValues';
import CoreSolution from './CoreSolution';

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Reset = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: red;
  border: 1px solid #0000007a;
  color: white;
  padding: 5px;
`;

class Core extends Component {
  state = {
    keysDone: false,
    keys: [],
    valuesDone: false,
    values: null,
    loading: false,
  };

  addKey = key => {
    if (this.state.keys.indexOf(key) !== -1 || key.length === 0) return;
    const keys = [...this.state.keys, key];
    this.setState({ keys });
  };

  keysDone = () => {
    const keys = [...this.state.keys].sort();
    this.setState({ keysDone: true, keys });
  };

  valuesDone = values => {
    this.setState({
      values,
      valuesDone: true,
    });
  };

  reset = () => {
    this.setState({
      keysDone: false,
      keys: [],
      valuesDone: false,
      values: null,
      loading: false,
    });
  };

  render() {
    const { keysDone, valuesDone } = this.state;
    return (
      <>
        <Reset onClick={this.reset}>Reset</Reset>
        <Content>
          <h2>Core finder</h2>
          {!keysDone ? (
            <AddKey
              addKey={this.addKey}
              keysDone={this.keysDone}
              keys={this.state.keys}
            />
          ) : !valuesDone ? (
            <AddCoreValues
              keys={this.state.keys}
              valuesDone={this.valuesDone}
            />
          ) : (
            // <p>val</p>
            <CoreSolution values={this.state.values} />
          )}
        </Content>
      </>
    );
  }
}

export default Core;