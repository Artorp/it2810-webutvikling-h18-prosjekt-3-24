import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default class TodoListItem extends React.Component {
  render() {
    return <Text style={styles.text}>Gjøremål</Text>;
  }
}

const styles = StyleSheet.create({
  text: {
    color: "white"
  }
});
