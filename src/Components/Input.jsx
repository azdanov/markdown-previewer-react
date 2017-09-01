// @flow

import React, { Component } from 'react';

type Props = {
  handleInputChange: Function,
  input: string,
};

class Input extends Component<Props> {
  props: Props;
  handleChange = (event: SyntheticInputEvent<HTMLTextAreaElement>) => {
    this.props.handleInputChange(event.currentTarget.value);
  };
  render() {
    return (
      <textarea
        className="input"
        value={this.props.input}
        onChange={this.handleChange}
        name="input-window"
      />
    );
  }
}

export default Input;
