import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gotAllTasks } from '../store/task';
import { connect } from 'react-redux';

import Task from './task';

class disconnectedAllTasks extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    this.props.getAllTasks();
    this.setState({ loaded: true });
  }

  render() {
    return (
      <View style={styles.taskContainer}>
        <Text
          style={{
            marginTop: 10,
            marginBottom: 40,
            alignSelf: 'flex-start',
            color: '#347FC4',
            fontFamily: 'Verdana-Bold',
          }}
        >
          {this.props.tasks.length} tasks
        </Text>
        {this.state.loaded &&
          this.props.tasks.map(task => {
            return <Task task={task} key={task.id} />;
          })}
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
  taskContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
