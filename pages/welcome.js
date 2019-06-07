/**
 * Sample React Native Welcome
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import $router from '../navigators/util';

export default class Welcome extends Component {

  componentDidMount() {
    this.timeId = setTimeout(() => (
      $router.resetTohome({
        navigation: this.props.navigation
      })
    ), 2000)
  }

  componentWillUnmount() {
    this.timeId && clearTimeout(this.timeId);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>12323123</Text>
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
});
