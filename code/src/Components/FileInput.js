import React, { Component } from 'react';
import styled from 'styled-components';

const FileInputBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: red; */
`;
const InputForFile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  input {
    margin-left: 10px;
  }
  button {
    width: 200px;
    margin: 10px;
  }
`;

const FileInputContent = styled.div`
  margin-top: 80px;
`;

class FileInput extends Component {
  state = {
    keysError: '',
    valuesError: '',
    keyInputRef: 0,
    valueInputRef: 0,
  };

  getKeys = async e => {
    try {
      const keys = await this.readFile(e);
      if (typeof keys !== 'object' || !keys.length) {
        this.setState({ keysError: 'Keys must be in array format' });
      } else {
        this.props.addKeysFromFile(keys);
        this.setState({ keysError: '' });
      }
    } catch (e) {
      this.setState({ keysError: 'Failed reading keys from file' });
    }
    this.setState({ keyInputRef: this.state.keyInputRef + 1 });
  };

  getValues = async e => {
    try {
      const values = await this.readFile(e);
      if (typeof values !== 'object') {
        this.setState({ valuesError: 'Values must be in object format' });
      } else {
        this.props.addValuesFromFile(values);
      }
    } catch (e) {
      this.setState({ valuesError: 'Failed reading values from file' });
    }
  };

  readFile = async e => {
    return new Promise((resolve, reject) => {
      e.preventDefault();
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = data => {
        try {
          const result = JSON.parse(data.target.result);
          resolve(result);
        } catch (e) {
          reject();
        }
      };
      reader.readAsText(file);
    });
  };

  generateValueFile = e => {
    e.preventDefault();
    const values = this.props.createValueTemplate();
    console.log(values);

    var element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(values))
    );
    element.setAttribute('download', 'example');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  render() {
    return (
      <FileInputContent>
        <h2>Upload files instead</h2>
        <FileInputBox>
          <InputForFile>
            <p>{this.state.keysError}</p>
            <label>
              Upload your keys
              <input
                key={this.state.keyInputRef}
                onChange={this.getKeys}
                id="keysUpload"
                type="file"
              />
            </label>
            <p>
              Key should be in JSON array format. E.g. ["key1", "key2", "key3"]
            </p>
          </InputForFile>
          <InputForFile>
            <p>{this.state.keysError}</p>
            {!this.props.keys.length && <p>Please add keys first</p>}
            {!!this.props.keys.length && (
              <button onClick={this.generateValueFile}>
                Download value template
              </button>
            )}
            <label>
              Upload your values
              <input
                type="file"
                disabled={!this.props.keys.length}
                key={this.state.valueInputRef}
                onChange={this.getValues}
                id="valuesUpload"
              />
            </label>
          </InputForFile>
        </FileInputBox>
      </FileInputContent>
    );
  }
}

export default FileInput;
