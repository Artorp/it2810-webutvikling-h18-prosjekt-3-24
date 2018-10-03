import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoList from "./TodoList";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoList />
        <Text>Testtekst</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
