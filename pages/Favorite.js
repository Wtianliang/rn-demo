import React, {Component, Fragment} from 'react';

import {
  Text,
  View,
  StyleSheet, Button
} from 'react-native';


class Favorite extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { navigation } = this.props;
    return (
      <Fragment>
        <Text>Favorite</Text>
        <Button
          title={'改变主题颜色'}
          onPress={() => {
            navigation.setParams({
              theme: {
                tintColor: 'black',
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
export default Favorite