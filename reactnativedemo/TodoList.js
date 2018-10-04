import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

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
      <View key={key} style={styles.item}>
        <TodoListItem />
        <View style={styles.separator} />
      </View>
    ));
  }

  render() {
    return (
      <View style={styles.todoList}>
        <NewTodoButton
          onPress={() => console.log("Nytt gjøremål-knapp trykt!")}
        />
        <ScrollView>{this.scrollViewArray()}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoList: {
    flex: 1,
    width: "100%", // La listen fylle hele bredden av appen.
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center"
  },

  separator: {
    height: 1,
    marginTop: 2,
    marginBottom: 2,
    backgroundColor: "#eee"
  },

  item: {
    marginLeft: 8,
    marginRight: 8
  },

  text: {
    color: "white"
  }
});
