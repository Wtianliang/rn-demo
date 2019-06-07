import React, {Component, Fragment} from 'react';

import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';


class Trend extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { navigation } = this.props;
    return (
      <Fragment>
        <Text>Trend</Text>
        <Button
          title={'改变主题颜色'}
          onPress={() => {
            navigation.setParams({
              theme: {
                tintColor: 'red',
                updateTime: new Date().getTime()
              }
            })
          }}
        />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({})
export default Trend