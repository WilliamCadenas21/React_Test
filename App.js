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

componentDidMount(){

     // Start counting when the page is loaded
     this.timeoutHandle = setTimeout(()=>{
          // Add your logic for the transition
          this.setState({ component: <Loginpage /> })
     }, 1000);
}

componentWillUnmount(){
     clearTimeout(this.timeoutHandle); 
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
