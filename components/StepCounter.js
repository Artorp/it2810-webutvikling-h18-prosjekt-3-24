import { Pedometer } from 'expo';
import React from 'react';
import { Text, View } from 'native-base';

export default class StepCounter extends React.Component {
  state = {
    isPedometerAvailable: 'checking',
    todayStepCount: 0,
    currentStepCount: 0,
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps,
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result),
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error,
        });
      }
    );

    const start = new Date();
    start.setHours(0, 0, 0, 0); // setting the start of the current day
    const end = new Date();
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ todayStepCount: result.steps });
      },
      error => {
        this.setState({
          todayStepCount: 'Could not get stepCount: ' + error,
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    return (
      <View>
        <Text>Steps taken today: {this.state.todayStepCount}</Text>
      </View>
    );
  }
}
