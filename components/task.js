import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const timeFormatter = (hours, minutes) => {
  let timeString = '';
  if (minutes < 10) {
    timeString = ':0' + minutes.toString();
  } else {
    timeString = ':' + minutes.toString();
  }

  if (hours >= 12) {
    timeString = timeString + 'PM';
    if (hours > 12) {
      hours -= 12;
    }
  } else {
    timeString = timeString + 'AM';
  }

  return hours.toString() + timeString;
};

export default function Task(props) {
  return (
    <View style={styles.container}>
      <Text>{props.task.name}</Text>
      <Text>{timeFormatter(props.task.hour, props.task.minute)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
