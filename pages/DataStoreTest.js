import React, {Component, Fragment} from 'react';
import DataStore from '../dataStore'
import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native';


class DataStoreTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showText: ''
    };
    this.dataStore = new DataStore();
  }

  render() {
    return (
      <Fragment>
        <Text>离线缓存</Text>
        <TextInput
          onChangeText={text => {
            this.value = text;
          }}
        />
        <Text onPress={() => this.loadData()}>获取</Text>
        <Text>{this.state.showText}</Text>
      </Fragment>
    );
  }

  loadData() {
    // console.log(123);
    let url = `https://api.github.com/search/repositories?q=${this.value}`;
    this.dataStore.fetchData(url)
      .then(data => {
        let showData = `初次加载时间：${new Date(data.timestamp)}
         ${JSON.stringify(data.data)}`;
        this.setState({
          showText: showData
        })
      })
      .catch(error => {
        error && console.log(error.toString());
      })
  }
}

const styles = StyleSheet.create({})
export default DataStoreTest