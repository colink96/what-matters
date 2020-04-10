import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import AllTasks from './components/allTasks';
import AddTaskForm from './components/addTaskForm';
import Header from './components/header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
    };
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.background}>
          <View style={styles.container}>
            <View style={styles.headContainer}>
              <Header />
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                style={styles.button}
                onPress={() =>
                  this.setState(prevState => {
                    return { showForm: !prevState.showForm };
                  })
                }
              >
                <View>
                  <Text style={{ fontSize: 30, color: 'white' }}>+</Text>
                </View>
              </TouchableHighlight>
            </View>
            <AllTasks />
            {this.state.showForm && <AddTaskForm />}
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#454ADE',
  },
  container: {
    flex: 1,
    borderRadius: 8,
    padding: 20,
    backgroundColor: 'white',
    marginVertical: 40,
    marginHorizontal: 10,
    padding: 20,
  },
  headContainer: {
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    height: 50,
    width: 50,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#454ADE',
    borderRadius: 25,
  },
});

export default App;
