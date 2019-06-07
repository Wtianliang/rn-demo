import React, {Component, Fragment} from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import $router from "../navigators/util";
import Tab from '../navigators/DynamicTabbar'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

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

const styles = StyleSheet.create({})
export default Home