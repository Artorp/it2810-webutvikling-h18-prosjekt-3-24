import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.items = [];
    for (i = 0; i < 60; i++) this.items.push("Listeoppføring");
    console.log("this.items i TodoList:", this.items);
  }

  scrollViewArray() {
    return this.items.map((item, key) => (
      <View key={key} style={styles.item}>
        <Text style={styles.text}>
          Oppføring nummer {key} – {item}
        </Text>
        <View style={styles.separator} />
      </View>
    ));
  }

  render() {
    return (
      <View style={styles.todoList}>
        <ScrollView>{this.scrollViewArray()}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoList: {
    flex: 1,
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
