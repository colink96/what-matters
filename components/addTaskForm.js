import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker } from 'react-native';
import { connect } from 'react-redux';

import { minutes, hours } from '../utils';
import { addedTask } from '../store/task';

export class AddTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      minute: 0,
      hour: 0,
      date: 0,
      month: 0,
      year: 0,
    };
  }

  render() {
    return (
      <View>
        <Text>{this.state.name}</Text>
        <Text>
          {this.state.hour}:{this.state.minute}
        </Text>
        <TextInput
          placeholder="Task Name"
          value={this.state.name}
          onChange={e => {
            this.setState({ name: e.nativeEvent.text });
          }}
        />
        <Picker
          selectedValue={this.state.hour}
          onValueChange={hour => this.setState({ hour })}
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
      </View>
    );
  }
}
