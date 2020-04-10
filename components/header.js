import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { days, months } from '../utils';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
    };
  }

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>
          {days[this.state.today.getDay()]},{' '}
          {months[this.state.today.getMonth()]} {this.state.today.getDate()},{' '}
          {this.state.today.getFullYear()}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Verdana',
  },
});

export default Header;
