// @flow

import React, { Component } from 'react';

type Props = {
  handleInputChange: Function,
  input: string,
};

class Input extends Component<Props> {
  props: {
    handleInputChange: Function,
    input: string,
  };
  handleChange = (event: SyntheticKeyboardEvent<HTMLTextAreaElement>) => {
    this.props.handleInputChange(event.currentTarget.value);
  };
  render() {
    return (
      <textarea
        value={this.props.input}
        onChange={this.handleChange}
        name="input-window"
      />
    );
  }
}

export default Input;
