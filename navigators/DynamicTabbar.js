import React, { Component } from 'react';
import {
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import { BottomTabBar } from 'react-navigation-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Popular from '../pages/Popular';
import Mine from '../pages/Mine';
import Favorite from '../pages/Favorite';
import Trend from '../pages/Trend';
//定义要生成的tabbar
const tabs = {
  Popular: {
    screen: Popular,
    navigationOptions: {
      tabBarLabel: '热门',
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialIcons
          name={'whatshot'}
          size={25}
          style={{color: tintColor}}
        />
      )
    }
  },
  Trend: {
    screen: Trend,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({ tintColor, focused }) => (
        <Feather
          name={'trending-up'}
          size={25}
          style={{color: tintColor}}
        />
      )
    }
  },
  Favorite: {
    screen: Favorite,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialIcons
          name={'favorite'}
          size={25}
          style={{color: tintColor}}
        />
      )
    }
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor, focused }) => (
        <Entypo
          name={'user'}
          size={25}
          style={{color: tintColor}}
        />
      )
    }
  }
}
export default class DynamicTabbar extends Component{
  constructor(props) {
    super(props);
  }

  dynamicTabbar() {
    const { Popular, Trend, Favorite, Mine } = tabs;
    //决定要渲染的tabbar
    const renderTabs = { Popular, Trend, Favorite, Mine };
    return (
      createAppContainer(createBottomTabNavigator(renderTabs, {
        tabBarComponent: TabBarComponent
      }))
    )
  }
  render() {
    const Tab = this.dynamicTabbar();
    return <Tab/>
  }
}

//自定义底部tabbar颜色组件
class TabBarComponent extends Component {
  constructor(props) {
    super(props);
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime()
    }
  }

  render() {
    const { routes, index } = this.props.navigation.state;
    // console.log(this.theme)
    if (routes[index].params) {
      const { theme } = routes[index].params;
      // console.log(theme)
      if (theme.updateTime > this.theme.updateTime) {
        this.theme = theme;
      }
    }
    return (
      //BottomTabBar 是内置组件
      <BottomTabBar
        {...this.props}
        activeTintColor={
          this.theme.tintColor || this.props.activeTintColor
        }
      />
    )
  }
}