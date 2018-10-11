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
import { Router, Scene } from 'react-native-router-flux';

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
          <Router hideNavBar= "true">
            <Scene key="root">
              <Scene key="todoList" component={TodoList} title="TodoList" initial={true} hideNavBar={true} />
              <Scene key="editTodo" component={EditTodo} title="EditTodo" />
            </Scene>
          </Router>
    )
  }
}
