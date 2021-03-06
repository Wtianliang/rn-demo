import React, {Component, Fragment} from 'react';

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  RefreshControl
} from 'react-native';
import {connect} from 'react-redux';
import actions from '../redux/action';
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';
import PopularItem from '../common/PopularItem';
import $router from '../navigators/util';

const baseUrl = 'https://api.github.com/search/repositories?q=';
const queryStr = '&sort=starts';
const themeColor = 'red';
class Popular extends Component {

  constructor(props) {
    super(props);
    //定义顶部导航展示的title
    this.topMenu = ['Java', 'Android', 'ios', 'React', 'React Native', 'PHP']
    this.state = {}
  }

  //自定义顶部导航内容
  generatorTop() {
    const tops = {};
    this.topMenu.forEach((item, index) => {
      tops[`top${index}`] = {
        screen: props => <TopMenu {...props} label={item}/>,
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
      </Fragment>
    );
  }
}

class PopularTab extends Component {

  constructor(props) {
    super(props);
    const {label} = this.props;
    this.storeName = label;
  }

  render() {
    return (
      <Fragment>
        <Text
          onPress={() => {
            $router.PageTo('Detail', { id: 2 });
          }}
        >
          跳转详情页
        </Text>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

const TopMenu = connect(mapStateToProps, mapDispatchToProps)(PopularTab);

export default Popular