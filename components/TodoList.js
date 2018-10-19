import React from 'react';
import { AsyncStorage, StyleSheet, Platform, StatusBar } from 'react-native';
import { List, ListItem, Body, Container, Content, Header, Text, Title } from 'native-base';

import { Actions } from 'react-native-router-flux';
import TodoListItem from './TodoListItem';
import NewTodoButton from './NewTodoButton';

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
    this.newItem = this.newItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  /**
   * See: https://stackoverflow.com/questions/41114460/how-to-setstate-in-asyncstorage-block-with-react-native
   */
  componentDidMount() {
    AsyncStorage.getItem('todoList', (errs, result) => {
      if (!errs) {
        if (result !== null) {
          this.setState({ items: JSON.parse(result) });
          console.log('Setting todo items state from AsyncStorage. Result: ' + result);
        }
      }
    });
  }

  newItem(editTodoState) {
    var allItems = this.state.items;
    var d = editTodoState.chosenDate;
    console.log('d: ' + d);
    allItems.push(
      editTodoState.nameOfTodo +
        ' (' +
        d.getFullYear() +
        '-' +
        (d.getMonth() + 1) +
        '-' +
        d.getDate() +
        ')'
    );
    this.setState({
      items: allItems,
    });
    console.log('New items kjørt');
    console.log(this.state.items);
    this.updateToDoListAsyncStorage();
  }

  /**
   * This takes a string representation of the todo item as an argument.
   * In the future, the todo item should be a proper object with an id, date object and a name.
   * `filter` is an asynchronous function and has have the `await` keyword to work properly.
   * @param {String} itemString String of the todo item
   */
  async deleteItem(itemString) {
    this.setState({
      items: await this.state.items.filter(todoItem => todoItem !== itemString),
    });
    console.log('Slettet todo item ' + itemString);
    console.log(this.state.items);
    this.updateToDoListAsyncStorage();
  }

  /**
   * See: https://facebook.github.io/react-native/docs/asyncstorage
   * Gets todo list from AsyncStorage.
   */
  retrieveToDoListAsyncStorage = async () => {
    try {
      const todoItems = await AsyncStorage.getItem('todoList');
      if (todoItems !== null) {
        // We have data!!
        console.log(todoItems);
        return todoItems;
      }
    } catch (error) {
      // Error retrieving data
      console.log('Could not get items from AsyncStorage');
      return [];
    }
  };

  /**
   * See: https://facebook.github.io/react-native/docs/asyncstorage
   * Saves todo list in AsyncStorage.
   * This method should be called every time the todo list changes.
   */
  updateToDoListAsyncStorage = async () => {
    try {
      await AsyncStorage.setItem('todoList', JSON.stringify(this.state.items));
      console.log('Lagret i AsyncStorage med updateToDoListAsyncStorage');
    } catch (error) {
      console.log('Noe gikk galt med lagring av todoList i AsyncStorage');
    }
  };

  scrollViewArray() {
    return this.state.items.map((item, key) => (
      <ListItem key={key}>
        <TodoListItem name={item} deleteItem={this.deleteItem} />
      </ListItem>
    ));
  }

  // Sends props an functions to EditTodo
  createNewTodoPage() {
    Actions.editTodo({ mytest: 'min test', onCreate: this.newItem });
    console.log('newtodoname: ' + this.props.newtodoname);
  }

  render() {
    var newTodoPage = () => this.createNewTodoPage();
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Supermotivator 3000</Title>
          </Body>
        </Header>
        <Content padder>
          <NewTodoButton onPress={newTodoPage} />
          <List>{this.scrollViewArray()}</List>
          <Text>{this.props.hello}</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
});
