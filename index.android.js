/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './src/app'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import {NativeModules} from 'react-native';
export default class testAPP2 extends Component {
  onPress(){
    // NativeModules.ToastExample.show('android toast', NativeModules.ToastExample.SHORT);
    NativeModules.JavaPageExample.startActivityFromJS("com.testapp2.javapage.JavaPage","hello form RN ");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

        <Image
          source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
          style={{ width: 400, height: 400 }}
        />
        <Button title="点击跳转原生页面" onPress={this.onPress}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

AppRegistry.registerComponent('testAPP2', () => testAPP2);

AppRegistry.registerComponent('testApp1', () => App);