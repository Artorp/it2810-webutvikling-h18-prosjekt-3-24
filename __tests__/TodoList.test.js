import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from '../components/TodoList';

const TodoList2 = class extends TodoList {
  setState(newState) {
    console.log('setState mocket: ' + newState.items);
    this.state.items = newState.items;
  }
};

test('blir tegnet riktig', () => {
  const tree = renderer.create(<TodoList />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('newItem og deleteItem virker', async () => {
  const list = new TodoList2();
  expect(list.state.items).toHaveLength(0);

  const todoName = 'A';
  const editTodoState = {
    chosenDate: new Date(),
    nameOfTodo: todoName,
  };
  list.newItem(editTodoState);
  expect(list.state.items).toHaveLength(1);

  console.log('prøver å fjerne «' + list.state.items[0] + '».');
  await list.deleteItem(list.state.items[0]);
  expect(list.state.items).toHaveLength(0);
});
