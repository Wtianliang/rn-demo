import React, {Component, Fragment} from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';


class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { navigation } = this.props;

    console.log(navigation.state);

    return (
      <Fragment>
        <Text>Detail</Text>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({})
export default Detail