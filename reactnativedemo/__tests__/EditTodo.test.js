import React from "react";
import EditTodo from "../components/EditTodo";
import renderer from "react-test-renderer";

test("blir tegnet riktig", () => {
  const tree = renderer.create(<EditTodo />).toJSON();
  expect(tree).toMatchSnapshot();
});
