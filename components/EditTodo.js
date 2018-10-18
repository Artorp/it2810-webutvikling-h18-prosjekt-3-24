import React from 'react';
import { DatePicker, Button, Text, Input, View, Form, Item } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      nameOfTodo: this.nameOfTodo,
    };
    this.setDate = this.setDate.bind(this);
    this.setName = this.setName.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  setName(newName) {
    this.setState({ nameOfTodo: newName });
  }

  addTodo() {
    console.log('Legg til gjøremål');
    Actions.pop();
  }

  render() {
    return (
      <View>
        <Form>
          <Item>
            <Input placeholder="Nytt gjøremål" onChange={this.setName} />
          </Item>
          <Item last>
            <DatePicker
              defaultData={this.state.chosenDate}
              onDateChange={this.setDate}
              placeHolderText="Velg dato"
              locale={'no'}
            />
          </Item>
          <Button full onPress={this.addTodo}>
            <Text>Lagre</Text>
          </Button>
        </Form>
      </View>
    );
  }
}
