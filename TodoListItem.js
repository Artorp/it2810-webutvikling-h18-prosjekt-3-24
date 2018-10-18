import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon, Text, View } from 'native-base';

export default class TodoListItem extends React.Component {
  render() {
    return (
      <View style={styles.todoListItem}>
        <Text style={styles.itemText}>{this.props.name}</Text>
        <Button iconRight rounded small info style={styles.itemButton}>
          <Text>Fjern</Text>
          <Icon name="trash" />
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoListItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    width: '75%',
  },
  itemButton: {
    width: '25%',
  },
});
