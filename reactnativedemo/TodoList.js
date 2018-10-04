import React from "react";
import { StyleSheet, View } from "react-native";
import { List, ListItem, Text } from "native-base";

import TodoListItem from "./TodoListItem";
import NewTodoButton from "./NewTodoButton";

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.items = [];
    for (i = 0; i < 60; i++) this.items.push("Listeoppføring");
    // console.log("this.items i TodoList:", this.items);
  }

  scrollViewArray() {
    return this.items.map((item, key) => (
      <ListItem key={key}>
        <TodoListItem />
      </ListItem>
    ));
  }

  render() {
    return (
      <View>
        <NewTodoButton
          onPress={() => console.log("Nytt gjøremål-knapp trykt!")}
        />
        <List>{this.scrollViewArray()}</List>
      </View>
    );
  }
}
