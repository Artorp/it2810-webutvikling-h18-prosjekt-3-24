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
import StepCounter from './components/StepCounter';

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.items = [];
    for (let i = 0; i < 60; i++) this.items.push('Listeoppføring');
    // console.log("this.items i TodoList:", this.items);
  }

  scrollViewArray() {
    return this.items.map((item, key) => (
      <ListItem key={key}>
        <TodoListItem />
      </ListItem>
    ));
  }

  render() {
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
          <StepCounter />
          <NewTodoButton
            onPress={() => {
              Actions.editTodo();
            }}
          />
          <List>{this.scrollViewArray()}</List>
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
