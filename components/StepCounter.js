import { Pedometer } from 'expo';
import React from 'react';
import { StyleSheet } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { Text, View } from 'native-base';

export default class StepCounter extends React.Component {
  state = {
    isPedometerAvailable: 'checking',
    todayStepCount: 0,
    currentStepCount: 0,
    goalStepCount: 10000,
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
    const progress = Math.max(0, Math.min(1, this.state.todayStepCount / this.state.goalStepCount));
    const red = 255 * Math.max(0, Math.min(1, 2 * (1 - progress)));
    const green = 255 * Math.max(0, Math.min(1, 2 * progress));
    console.log('progress: ' + progress + ', red: ' + red + ', green: ' + green);
    return (
      <View style={styles.counter}>
        <Text>
          Du har gått {this.state.todayStepCount} av {this.state.goalStepCount} skritt i dag.
        </Text>
        <ProgressBar
          progress={progress}
          width={null}
          height={12}
          color={'rgba(' + red + ', ' + green + ', 0, 1)'}
          borderColor="rgba(0, 0, 0, 1)"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    marginBottom: 12,
  },
});
