import React, { Component } from 'react';
import {
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import { connect } from 'react-redux';
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
class DynamicTabbar extends Component{
  constructor(props) {
    super(props);
  }

  dynamicTabbar() {
    if (this.tabs) return this.tabs;
    const { Popular, Trend, Favorite, Mine } = tabs;
    //决定要渲染的tabbar
    const renderTabs = { Popular, Trend, Favorite, Mine };
    return this.tabs = (
      createAppContainer(createBottomTabNavigator(renderTabs, {
        tabBarComponent: props => {
          return <TabBarComponent theme={this.props.theme} {...props} />
        }
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
    // this.theme = {
    //   tintColor: props.activeTintColor,
    //   updateTime: new Date().getTime()
    // }
  }

  render() {
    return (
      //BottomTabBar 是内置组件
      <BottomTabBar
        {...this.props}
        activeTintColor={this.props.theme}
      />
    )
  }
}

const mapStateToProps = state => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(DynamicTabbar);