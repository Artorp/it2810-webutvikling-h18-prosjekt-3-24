import React from 'react';
import renderer from 'react-test-renderer';
import TodoListItem from '../TodoListItem';

test('blir tegnet riktig', () => {
  const tree = renderer.create(<TodoListItem name="Testgjøremål" />).toJSON();
  expect(tree).toMatchSnapshot();
});
