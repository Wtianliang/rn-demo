import React, {Component, Fragment} from 'react';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { connect } from 'react-redux';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import WelCome from '../pages/welcome';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

export const rootCom = 'Main'; //设置跟路由

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

export const RootRouter =  createAppContainer(createSwitchNavigator({
  // Init: InitRouter,
  Main: MainRouter
}))

export const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
  'root'
);

const AppWithNavigationState = createReduxContainer(RootRouter, 'root');

const mapStateToProps = (state) => ({
  state: state.nav,
});
export default connect(mapStateToProps)(AppWithNavigationState);