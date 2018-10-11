import React from 'react';
import EditTodo from './components/EditTodo';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import {
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
  Title
} from 'native-base';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { loading: true }
  }

  async componentWillMount () {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    })
    this.setState({ loading: false })
  }

  render () {
    if (this.state.loading) {
      return <Expo.AppLoading />
    }
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
          <Text>Dette er Content.</Text>
          <EditTodo />
          <TodoList />
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
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  }
})
