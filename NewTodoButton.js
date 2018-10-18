import React from 'react';
import { Button, Text } from 'native-base';

export default class NewTodoButton extends React.Component {
  render() {
    return (
      <Button title="Nytt gjøremål" onPress={this.props.onPress} full>
        <Text>Nytt gjøremål</Text>
      </Button>
    );
  }
}
