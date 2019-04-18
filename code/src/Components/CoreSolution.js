import React, { Component } from 'react';
import { coreSolver } from '../Solver/TheCore';
import styled from 'styled-components';

const CoreList = styled.ul`
  list-style: none;
`;

class CoreSolution extends Component {
  state = { solution: [] };

  componentDidMount = () => {
    const solution = coreSolver(this.props.values).filter(x => x.isCore);

    this.setState({ solution });
  };

  render() {
    return (
      <div>
        <h1>The cores found</h1>
        <CoreList>
          {this.state.solution.map(({ keyCombined }, i) => (
            <li key={keyCombined}>{keyCombined}</li>
          ))}
        </CoreList>
      </div>
    );
  }
}

export default CoreSolution;
