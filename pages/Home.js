import React, {Component, Fragment} from 'react';

import {
  Text,
  View,
  StyleSheet,
  BackHandler
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import $router from "../navigators/util";
import Tab from '../navigators/DynamicTabbar'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //处理android物理返回键
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.routes[0].index === 0) return false;
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    $router.navigation = this.props.navigation;
    return (
      <Fragment>
         <Tab/>
         {/*<Text>123</Text>*/}
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});
const mapStateToProps = state => ({
  nav: state.nav
})
export default connect(mapStateToProps)(Home);