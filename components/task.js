import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import timeFormatter from '../utils/timeFormatter';

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
