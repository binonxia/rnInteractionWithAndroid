/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { NativeModules } from "react-native";
export default class App extends Component {
  onPress() {
    // NativeModules.ToastExample.show('android toast', NativeModules.ToastExample.SHORT);
    NativeModules.JavaPageExample.startActivityFromJS(
      "com.testapp2.javapage.JavaPage",
      "hello form RN "
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>RN其中一个页面</Text>

        <Image
          source={{ uri: "https://bucket-showyu.oss-cn-beijing.aliyuncs.com/mobile/staffDefault.png" }}
          style={{ width: 400, height: 400 }}
        />

        <Button title="点击跳转原生页面" onPress={this.onPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
