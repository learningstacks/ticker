import React, { Component } from 'react'
import {
  // StyleSheet,
  TouchableOpacity,
  Text,
  View,
  // Button,
} from 'react-native'
import Timer from './Timer'
import TaskInput from './TaskInput'

export default class MainTimer extends Component {

  state = {
    timerOn: false,
    // elapsedTimeInSeconds: null,
    // lastElaspedTime: null,
    // startTime: null,
  }

  stopTimer = () => {
    this.setState({
      timerOn: false,
      // lastElaspedTime: this.state.elapsedTime,
    })
  }

  startTimer = () => {
    this.setState({ timerOn: true })
  }

  render() {
    const { timerOn } = this.state
    return (
      <View style={styles.container}>
        <TaskInput style={styles.taskInput} />
        <Timer style={styles.timer} timerOn={timerOn} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={timerOn ? this.stopTimer : this.startTimer}
          >
            <Text style={styles.buttonText}>{timerOn ? 'Stop' : 'Start'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 10,
    padding: 10,
    height: 60,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  taskInput: {
    flex: 2,
    height: '100%',
    justifyContent: 'center',
  },
  timer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  buttonText: {
    color: '#4283f4',
  },
}
