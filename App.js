import React, {Component, Fragment} from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { Provider } from 'react-redux';
import Router from './navigators';
import store from './redux/store';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({})
export default App