// @flow

import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';
import initialState from '../initialState';

type State = {
  input: string,
};

class App extends Component<any, State> {
  state = {
    input: initialState,
  };

  handleInputChange = (input: string) => {
    this.setState({ input });
  };

  render() {
    return (
      <div>
        <Input
          handleInputChange={this.handleInputChange}
          input={this.state.input}
        />
        <Output input={this.state.input} />
      </div>
    );
  }
}

export default App;
