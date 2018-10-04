import React from "react";
import {Text, View, TextInput, DatePickerIOS, SafeAreaView, Button, StyleSheet, Header} from 'react-native';

export default class EditTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date(),
            nameOfTodo: this.nameOfTodo,
        }
        this.setDate = this.setDate.bind(this);
        this.setName = this.setName.bind(this);
        
        }

        setDate(newDate) {
            this.setState({chosenDate: newDate})
        }

        setName(newName) {
            this.setState({nameOfTodo: newName})
        }

        addTodo() {
            //TODO

        }

    render() {
      return (
        <View>
            <SafeAreaView>
                <Text>
                    Nytt gjøremål
                </Text>
                <TextInput
                    placeholder={this.nameOfTodo}
                    onChange={this.setName}
                    />
                <DatePickerIOS 
                    date ={this.state.chosenDate}
                    onDateChange={this.setDate}
                />
                <Button
                    title="Legg til gjøremål"
                    onPress={this.addTodo}
                />
            </SafeAreaView>
        </View>
      );
    }
  }