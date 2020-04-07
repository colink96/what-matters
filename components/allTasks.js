import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gotAllTasks } from '../store/task';
import { connect } from 'react-redux';

import Task from './task';
import { days, months } from '../utils';

class disconnectedAllTasks extends React.Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      loaded: false,
    };
  }

  componentDidMount() {
    this.props.getAllTasks();
    this.setState({ loaded: true });
  }

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text>
            Today is: {days[this.state.today.getDay()]},{' '}
            {months[this.state.today.getMonth()]} {this.state.today.getDate()},{' '}
            {this.state.today.getFullYear()}
          </Text>
        </View>
        <View style={styles.taskContainer}>
          {this.state.loaded &&
            this.props.tasks.map(task => {
              return <Task task={task} key={task.id} />;
            })}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllTasks: () => dispatch(gotAllTasks()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(disconnectedAllTasks);

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
