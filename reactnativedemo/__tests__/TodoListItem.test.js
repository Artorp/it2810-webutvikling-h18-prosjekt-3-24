import React from "react";
import TodoListItem from "../TodoListItem";
import renderer from "react-test-renderer";

test("blir tegnet riktig", () => {
  const tree = renderer.create(<TodoListItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
