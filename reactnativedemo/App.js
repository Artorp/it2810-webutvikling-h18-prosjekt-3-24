import React from "react";
import EditTodo from "./components/EditTodo";
import TodoList from "./TodoList";
import { Router, Scene } from "react-native-router-flux";
import ErrorBoundary from "./components/ErrorBoundary";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    console.log("Tegner App.");
    if (this.state.loading) {
      console.log("Laster fortsatt!");
      return <Expo.AppLoading />;
    }
    console.log("Laster ikke lenger! Tegner.");
    return (
      <ErrorBoundary>
        <Router hideNavBar="true">
          <Scene key="root">
            <Scene
              key="todoList"
              component={TodoList}
              title="TodoList"
              initial
              hideNavBar
            />
            <Scene key="editTodo" component={EditTodo} title="EditTodo" />
          </Scene>
        </Router>
      </ErrorBoundary>
    );
  }
}
