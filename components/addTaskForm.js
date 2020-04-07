import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

import { minutes, hours } from '../utils';
import { addedTask } from '../store/task';

const mapDispatchToProps = dispatch => {
  return {
    addTask: task => dispatch(addedTask(task)),
  };
};

class AddTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      minute: 0,
      hour: 1,
      PM: false,
    };
  }

  render() {
    return (
      <View>
        <Text>Task Name: </Text>
        <TextInput
          placeholder="Task Name"
          value={this.state.name}
          onChange={e => {
            this.setState({ name: e.nativeEvent.text });
          }}
        />
        <View style={styles.form}>
          <Picker
            style={styles.picker}
            selectedValue={
              this.state.PM ? this.state.hour - 12 : this.state.hour
            }
            onValueChange={hour => {
              if (this.state.PM) {
                this.setState({ hour: hour + 12 });
              } else {
                this.setState({ hour });
              }
            }}
          >
            {hours.map(hr => {
              return (
                <Picker.Item
                  key={hr}
                  value={hr}
                  label={hr === 0 ? '12' : hr.toString()}
                />
              );
            })}
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={this.state.minute}
            onValueChange={minute => {
              this.setState({ minute });
            }}
          >
            {minutes.map(min => {
              return (
                <Picker.Item
                  key={min}
                  value={min}
                  label={min >= 10 ? min.toString() : '0' + min.toString()}
                />
              );
            })}
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={this.state.PM}
            onValueChange={PM => {
              this.setState(prevState => {
                if (prevState.PM !== PM && PM) {
                  return { PM, hour: prevState.hour + 12 };
                } else if (prevState.PM !== PM && !PM) {
                  return { PM, hour: prevState.hour - 12 };
                }
              });
            }}
          >
            <Picker.Item value={false} label="AM" />
            <Picker.Item value={true} label="PM" />
          </Picker>
        </View>
        <Button
          title="submit"
          onPress={() =>
            this.props.addTask({
              name: this.state.name,
              minute: this.state.minute,
              hour: this.state.hour,
            })
          }
        />
        <Text>{this.state.name}</Text>
        <Text>
          {this.state.hour}:{this.state.minute}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    borderWidth: 2,
    width: 400,
    flexDirection: 'row',
  },
  picker: {
    flexDirection: 'column',
    flex: 1,
    height: 200,
    borderWidth: 2,
  },
});

export default connect(null, mapDispatchToProps)(AddTaskForm);
