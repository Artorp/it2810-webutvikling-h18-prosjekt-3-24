import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

export default class NewTodoButton extends React.Component {
  render() {
    return <Button title="Nytt gjøremål" onPress={this.props.onPress} />;
  }
}
