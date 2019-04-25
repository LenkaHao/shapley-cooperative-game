import React, { Component } from 'react';
import styled from 'styled-components';
import FileInput from './FileInput';

const Input = styled.input``;
const KeyList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
  padding: 0;
  li {
    padding: 0 5px;
  }
`;

const Submit = styled.form`
  margin: 10px;
`;

class AddKey extends Component {
  state = {
    key: '',
  };

  handleChange = event => {
    this.setState({ key: event.target.value });
  };

  handleKeyAdd = event => {
    const key = this.state.key;
    event.preventDefault();
    this.props.addKey(key);
    this.setState({ key: '' });
  };

  handleKeyDone = event => {
    event.preventDefault();
    this.props.keysDone();
  };

  render() {
    const { keys } = this.props;
    return (
      <div>
        <div>
          <p>Current key count {keys.length}</p>
          <KeyList>
            {keys.map(key => (
              <li key={key}>{key}</li>
            ))}
          </KeyList>
          <form onSubmit={this.handleKeyAdd}>
            <Input
              type="text"
              name="key"
              value={this.state.key}
              onChange={this.handleChange}
              placeholder="Add a key"
            />
            <Input type="submit" value="Add key" />
          </form>
          <Submit onSubmit={this.handleKeyDone}>
            <Input type="submit" value="Finished adding keys" />
          </Submit>
        </div>
        <div>
          <FileInput
            keys={this.props.keys}
            addKeysFromFile={this.props.addKeysFromFile}
            addValuesFromFile={this.props.addValuesFromFile}
            createValueTemplate={this.props.createValueTemplate}
          />
        </div>
      </div>
    );
  }
}

export default AddKey;
