import React from 'react';
import renderer from 'react-test-renderer';
import EditTodo from '../components/EditTodo';

const EditTodo2 = class extends EditTodo {
  setState(newState) {
    console.log('setState mocket: ' + newState.items);
    this.state = newState;
  }
};

test('blir tegnet riktig', () => {
  const tree = renderer.create(<EditTodo />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('setDate', () => {
  const editTodo = new EditTodo2();
  const date = new Date('2001');
  editTodo.setDate(date);
  expect(editTodo.state.chosenDate).toBe(date);
});

test('setName', () => {
  const editTodo = new EditTodo2();
  const name = 'Nytt navn';
  editTodo.setName(name);
  expect(editTodo.state.nameOfTodo).toBe(name);
});
