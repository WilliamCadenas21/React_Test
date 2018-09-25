import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './Homepage';
import Loginpage from './Loginpage';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      component: <Homepage />
    }
  }

  render() {
    return (
      this.state.component
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
