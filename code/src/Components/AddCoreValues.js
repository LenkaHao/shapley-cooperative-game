import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .submit {
    width: 100%;
    margin: 0 auto;
  }
`;
const Input = styled.input`
  width: 50%;
  margin-left: 10px;
  margin-bottom: 8px;
`;

const InputGroup = styled.div`
  width: calc(50% - 2px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  border: 1px solid black;

  p {
    width: 100%;

    span {
      font-weight: 700;
    }
  }
`;

class AddCoreValues extends Component {
  state = {
    values: null,
  };

  componentDidMount() {
    const values = this.props.createValueTemplate();

    this.setState({ values });
  }

  handleChange = (event, setId, key) => {
    const { value } = event.target;
    if (isNaN(parseInt(value))) return;
    const values = {
      ...this.state.values[setId].values,
      [key]: parseInt(value),
    };
    const set = { ...this.state.values[setId], values };

    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [setId]: set,
      },
    }));
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
          {Object.entries(values).map(([set, group]) => {
            return (
              <InputGroup key={set}>
                <p>
                  Current set <span>{set}</span>
                </p>
                {[...group.set].map(key => {
                  return (
                    <label key={key}>
                      {key}
                      <Input
                        type="number"
                        name={key}
                        value={values[set].values[key]}
                        onChange={e => this.handleChange(e, set, key)}
                        placeholder="0"
                      />
                    </label>
                  );
                })}
              </InputGroup>
            );
          })}
          <div className="submit">
            <input type="submit" value="Submit values" />
          </div>
        </Form>
      </div>
    );
  }
}

export default AddCoreValues;
