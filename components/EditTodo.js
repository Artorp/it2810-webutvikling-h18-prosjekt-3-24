import React from 'react';
import { DatePicker, Button, Text, Input, View, Form, Item } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      nameOfTodo: '',
    };
    this.setDate = this.setDate.bind(this);
    this.setName = this.setName.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  setName(newName) {
    this.setState({ nameOfTodo: newName });
  }

  addTodo() {
    console.log('addTodo(): date:' + this.state.chosenDate + ', name: ' + this.state.nameOfTodo);
    Actions.pop();
    this.props.onCreate(this.state);
  }

  render() {
    return (
      <View>
        <Form>
          <Item>
            <Input placeholder="Nytt gjøremål" onChangeText={text => this.setName(text)} />
          </Item>
          <Item last>
            <DatePicker
              defaultData={this.state.chosenDate}
              onDateChange={date => this.setDate(date)}
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
