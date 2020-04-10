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
        <View style={{ flexDirection: 'row' }}>
          <SwipeGesture
            onSwipePerformed={action => {
              if (action === 'left') {
                this.props.deleteTask(this.props.task.id);
              }
            }}
            gestureStyle={styles.swipeContainer}
          >
            <View style={styles.task}>
              <Text style={{ fontFamily: 'Verdana' }}>
                {this.props.task.name}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'Verdana',
                  color: 'lightgray',
                }}
              >
                {timeFormatter(this.props.task.hour, this.props.task.minute)}
              </Text>
            </View>
          </SwipeGesture>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    margin: 10,
  },
  container: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center',
  },
  swipeContainer: {
    height: '100%',
    width: '100%',
  },
});

export default connect(null, mapDispatchToProps)(Task);
