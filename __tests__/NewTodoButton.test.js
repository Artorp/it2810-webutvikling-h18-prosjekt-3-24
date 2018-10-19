import React from 'react';
import renderer from 'react-test-renderer';
import NewTodoButton from '../components/NewTodoButton';

test('blir tegnet riktig', () => {
  const tree = renderer.create(<NewTodoButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
