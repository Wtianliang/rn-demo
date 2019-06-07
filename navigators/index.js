import React, {Component, Fragment} from 'react';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import WelCome from '../pages/welcome';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import { connect } from 'react-redux';
import {
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers' 

const InitRouter = createStackNavigator({
  WelCome: {
    screen: WelCome,
    navigationOptions: {
      header: null
    }
  }
})

const MainRouter = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Detail: {
    screen: Detail
  }
})

export default createAppContainer(createSwitchNavigator({
  // Init: InitRouter,
  Main: MainRouter
}))