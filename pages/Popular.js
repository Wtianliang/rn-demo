import React, {Component, Fragment} from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';
import $router from '../navigators/util';

class Popular extends Component {

  constructor(props) {
    super(props);
    //定义顶部导航展示的title
    this.topMenu = ['Java','Android','ios','React','React Native','PHP']
    this.state = {}
  }

  //自定义顶部导航内容
  generatorTop() {
    const tops = {};
    this.topMenu.forEach((item, index) => {
      tops[`top${index}`] = {
        screen: props => <Popular1 {...props} label={item}/>,
        navigationOptions: {
          title: item
        }
      }
    })
    return tops;
  }

  //初始化顶部导航
  initTop() {
    const top = createMaterialTopTabNavigator(this.generatorTop(), {
      tabBarOptions: {
        scrollEnabled: true,
        upperCaseLabel: false,
        style: {
          backgroundColor: '#678'
        },
        indicatorStyle: {
          backgroundColor: '#fff'
        }
      }
    });
    return createAppContainer(top);
  }

  render() {

    const Top = this.initTop();
    return (
      <Fragment>
        <Top/>
        {/*<Text>top</Text>*/}
      </Fragment>
    );
  }
}

function Popular1(props) {
  return (
    <Fragment>
      <Text>{props.label}</Text>
      <Text
        onPress={() => $router.PageTo({},'Detail')}
      >go to detail</Text>
    </Fragment>
  )
}function Popular2() {
  return (
    <Text>Popular2</Text>
  )
}
const styles = StyleSheet.create({})
export default Popular