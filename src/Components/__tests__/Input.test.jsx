// @flow

import React from 'react';

import { shallow } from 'enzyme';
import Input from '../Input';

test('Input renders correctly', () => {
  const component = shallow(<Input input={''} handleInputChange={() => {}} />);
  expect(component).toMatchSnapshot();
});

test('handleInputChange is called', () => {
  const handleInputChangeMock = jest.fn();
  const inputWord = 'foo';

  const component = shallow(
    <Input input={''} handleInputChange={handleInputChangeMock} />,
  );

  component
    .find('textarea')
    .simulate('change', { currentTarget: { value: inputWord } });

  expect(handleInputChangeMock).toBeCalled();
  expect(handleInputChangeMock).toBeCalledWith(inputWord);
});
