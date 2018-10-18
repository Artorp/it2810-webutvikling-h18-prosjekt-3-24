import React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import {
  List,
  ListItem,
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title,
} from 'native-base';

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
  }

  newItem(editTodoState) {
    var allItems = this.state.items;
    allItems.push(editTodoState.nameOfTodo + '(' + editTodoState.chosenDate + ')');
    this.setState({
      items: allItems,
    });
    console.log('New items kjørt');
    console.log(this.state.items);
  }

  scrollViewArray() {
    return this.state.items.map((item, key) => (
      <ListItem key={key}>
        <TodoListItem name={item} />
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
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <NewTodoButton onPress={newTodoPage} />
          <List>{this.scrollViewArray()}</List>
          <Text>{this.props.hello}</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Fane 1</Text>
            </Button>
          </FooterTab>
          <FooterTab>
            <Button full>
              <Text>Fane 2</Text>
            </Button>
          </FooterTab>
        </Footer>
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
