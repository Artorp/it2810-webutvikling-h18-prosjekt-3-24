import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Expo from 'expo';
import TodoList from './TodoList';
import EditTodo from './components/EditTodo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Router hideNavBar="true">
        <Scene key="root">
          <Scene key="todoList" component={TodoList} title="TodoList" initial hideNavBar />
          <Scene key="editTodo" component={EditTodo} title="EditTodo" />
        </Scene>
      </Router>
    );
  }
}
