import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { connect } from 'react-redux';

import { timeFormatter } from '../utils';
import { completedTask } from '../store/task';

const mapDispatchToProps = dispatch => {
  return {
    completeTask: id => dispatch(completedTask(id)),
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
        <Text>{this.props.task.name}</Text>
        <Text>
          {timeFormatter(this.props.task.hour, this.props.task.minute)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    padding: 5,
    marginVertical: 5,
    alignSelf: 'center',
    flex: 0,
    flexDirection: 'row',
    width: 400,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 3,
  },
});

export default connect(null, mapDispatchToProps)(Task);
