// @flow

import React from 'react';

import { shallow, render } from 'enzyme';
import Output from '../Output';

test('Output renders correctly', () => {
  const component = shallow(<Output input={''} />);
  expect(component).toMatchSnapshot();
});

test('Output renders correct markup', () => {
  const input = 'Foo';
  const markdown = `# ${input}`;

  const component = render(<Output input={markdown} />);

  expect(component.text()).toContain(input);
  expect(component.find('h1').length).toBe(1);
});
