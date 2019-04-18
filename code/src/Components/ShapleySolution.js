import React, { Component } from 'react';
import shapleySolver from '../Solver/ShapleySolver';
import styled from 'styled-components';

const ShapleyList = styled.ul`
  list-style: none;
`;

class ShapleySolution extends Component {
  render() {
    const solution = shapleySolver(this.props.keys, this.props.values);

    return (
      <div>
        <h1>Computed shapley values from input</h1>
        <ShapleyList>
          {this.props.keys.map((key, i) => (
            <li key={key}>
              {key}: {solution[i]}
            </li>
          ))}
        </ShapleyList>
      </div>
    );
  }
}

export default ShapleySolution;
