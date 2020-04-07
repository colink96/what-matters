import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import AllTasks from './components/allTasks';
import AddTaskForm from './components/addTaskForm';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AddTaskForm />
        <AllTasks />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
