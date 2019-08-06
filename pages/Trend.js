import React, {Component, Fragment} from 'react';
import  { connect } from 'react-redux';
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
        <Button
          title={'改变主题颜色'}
          onPress={() => {
            this.props.themeChange('#096');
          }}
        />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});

const mapDispatchToProps = dispatch => {
  return {
    themeChange: theme => dispatch(actions.themeChange(theme))
  }
};
export default connect(null, mapDispatchToProps)(Trend);