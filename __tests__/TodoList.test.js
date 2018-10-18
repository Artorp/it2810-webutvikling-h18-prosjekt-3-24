import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from '../TodoList';

test('blir tegnet riktig', () => {
  const tree = renderer.create(<TodoList />).toJSON();
  expect(tree).toMatchSnapshot();
});
