import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { connect } from 'react-redux';

import { timeFormatter } from '../utils';
import { completedTask, deletedTask } from '../store/task';
import SwipeGesture from '../utils/swipe-gesture';

const mapDispatchToProps = dispatch => {
  return {
    completeTask: id => dispatch(completedTask(id)),
    deleteTask: id => dispatch(deletedTask(id)),
  };
};

class Task extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Switch
          value={this.props.task.complete}
          onValueChange={() => this.props.completeTask(this.props.task.id)}
        />
        <View style={styles.task}>
          <SwipeGesture
            onSwipePerformed={action => {
              if (action === 'left') {
                this.props.deleteTask(this.props.task.id);
              }
            }}
            gestureStyle={styles.swipeContainer}
          >
            <Text>{this.props.task.name}</Text>
            <Text>
              {timeFormatter(this.props.task.hour, this.props.task.minute)}
            </Text>
          </SwipeGesture>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  task: { flexDirection: 'row', flex: 1, justifyContent: 'space-between' },
  container: {
    height: 50,
    padding: 5,
    marginVertical: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    width: 400,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 3,
  },
  swipeContainer: {
    height: '100%',
    width: '100%',
  },
});

export default connect(null, mapDispatchToProps)(Task);
