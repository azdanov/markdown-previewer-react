// @flow

import React from 'react';
import Input from './Input';
import Output from './Output';

type State = {
  input: string,
};

class App extends React.Component<any, State> {
  state = {
    input: '',
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
