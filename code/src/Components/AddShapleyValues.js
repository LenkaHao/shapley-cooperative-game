import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  label {
    width: 23%;
    margin: 2% 5%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .submit {
    width: 100%;
    margin: 0 auto;
  }
`;
const Input = styled.input``;

class AddShapleyValues extends Component {
  state = {
    values: null,
  };

  componentDidMount() {
    const values = this.props.createValueTemplate();

    this.setState({ values });
  }

  handleChange = event => {
    const { name, value } = event.target;
    const values = { ...this.state.values, [name]: parseInt(value) };
    this.setState({ values });
  };

  handleValuesAdd = event => {
    event.preventDefault();
    this.props.valuesDone(this.state.values);
  };

  render() {
    const { values } = this.state;

    if (values === null)
      return (
        <div>
          <p>Loading...</p>
        </div>
      );

    return (
      <div>
        <h1>Insert value for each set</h1>
        <Form onSubmit={this.handleValuesAdd}>
          {Object.keys(values).map(set => {
            return (
              <label key={set}>
                {set}
                <input
                  type="number"
                  name={set}
                  value={this.state.values.set}
                  onChange={this.handleChange}
                  placeholder="0"
                />
              </label>
            );
          })}
          <div className="submit">
            <Input type="submit" value="Submit values" />
          </div>
        </Form>
      </div>
    );
  }
}

export default AddShapleyValues;
