import React from "react";
import TodoList from "../TodoList";
import renderer from "react-test-renderer";

test("blir tegnet riktig", () => {
  const tree = renderer.create(<TodoList />).toJSON();
  expect(tree).toMatchSnapshot();
});
