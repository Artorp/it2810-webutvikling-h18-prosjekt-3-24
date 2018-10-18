import React from 'react';
import renderer from 'react-test-renderer';
import EditTodo from '../components/EditTodo';

// console.error = jest.fn();

// beforeEach(() => {
//   console.error.mockClear();
// });

test('blir tegnet riktig', () => {
  const tree = renderer.create(<EditTodo />).toJSON();
  expect(tree).toMatchSnapshot();
});
