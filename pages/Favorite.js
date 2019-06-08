import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import {
  Text,
  View,
  StyleSheet, Button
} from 'react-native';
import actions from "../redux/action";


class Favorite extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { navigation } = this.props;
    return (
      <Fragment>
        <Text>Favorite</Text>
        <Button
          title={'改变主题颜色'}
          onPress={() => {
            this.props.themeChange('#de1');
          }}
        />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({})
const mapStateToProps = state => {
  return {

  }
};
const mapDispatchToProps = dispatch => {
  return {
    themeChange: theme => dispatch(actions.themeChange(theme))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Favorite);