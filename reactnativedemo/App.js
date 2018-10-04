import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EditTodo from "./components/EditTodo";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <EditTodo />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
