import Pin from "./components/Pin"
import React, {Component} from 'react';
import {Platform, StyleSheet, Text,ScrollView, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
  constructor(props){
    super(props)
    this.state= {
      pin:{
        grim:{
          source:require("./assets/gs.jpg"),
          originalWidth:1013,
          originalHeight:1800,
        }
      }
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
    
      <Pin pinSource={this.state.pin.grim/>
      <Pin/>
      <Pin/>
      <Pin/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
