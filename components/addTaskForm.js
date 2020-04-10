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
      <View style={styles.form}>
        <Text style={{ alignSelf: 'center' }}>Task Name: </Text>
        <TextInput
          style={{ borderWidth: 1, padding: 3, height: 50 }}
          placeholder="Task Name"
          value={this.state.name}
          onChange={e => {
            this.setState({ name: e.nativeEvent.text });
          }}
        />
        <View style={styles.pickerContainer}>
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
          title="Add Task"
          onPress={() => {
            this.props.addTask({
              name: this.state.name,
              minute: this.state.minute,
              hour: this.state.hour,
            });
            this.setState({ name: '' });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    position: 'absolute',
    top: 80,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  pickerContainer: {
    width: 400,
    flexDirection: 'row',
  },
  picker: {
    flexDirection: 'column',
    flex: 1,
    height: 200,
  },
});

export default connect(null, mapDispatchToProps)(AddTaskForm);
