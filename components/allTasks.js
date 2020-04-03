import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gotAllTasks } from '../store/task';
import { connect } from 'react-redux';

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
      <View>
        {this.state.loaded &&
          this.props.tasks.map(task => {
            return <Text key={task.id}>{task.name}</Text>;
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
