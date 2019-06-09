import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import {
  Text,
  View,
  StyleSheet, Button
} from 'react-native';
import actions from "../redux/action";
import $router from "../navigators/util";


class Mine extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { navigation } = this.props;
    return (
      <Fragment>
        <Text>Mine</Text>
        <Button
          title={'改变主题颜色'}
          onPress={() => {
            this.props.themeChange('#91d');
          }}
        />
        <Text
          onPress={() => {
            $router.PageTo('DataStoreTest')
          }}
        >DataStoreTest</Text>
        <Text
          onPress={() => $router.PageTo({},'Detail')}
        >go to detail</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(Mine);