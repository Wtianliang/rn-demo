import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import actions from '../redux/action';

import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';
import theme from "../redux/reducer/theme";


class Trend extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { navigation } = this.props;
    return (
      <Fragment>
        <Text>Trend</Text>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  richText: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    themeChange: theme => dispatch(actions.themeChange(theme))
  }
};
export default connect(null, mapDispatchToProps)(Trend);