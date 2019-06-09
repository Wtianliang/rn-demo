import React, {Component, Fragment} from 'react';

import {
  AsyncStorage
} from 'react-native';


class DataStore extends Component {

  fetchData(url) {
    return new Promise((resolve, reject) => {
      this.fetchLocalDate(url).then(wrapData => {
        if (wrapData && DataStore.checkTimestampVaild(wrapData.timestamp)) {
          resolve(wrapData);
        } else {
          this.fetchServiceData(url)
            .then(data => {
              resolve(this.wrapData(data));
            })
            .catch(error => {
              reject(error);
            })
        }
      })
        .catch(error => {
          this.fetchServiceData(url)
            .then(data => {
              resolve(this.wrapData(data));
            })
            .catch(error => {
              reject(error);
            })
        })
    })
  }

  //保存数据
  saveData(key, data, callback) {
    if (!key || !data) return;
    AsyncStorage.setItem(key, JSON.stringify(this.wrapData(data)), callback);
  }

  wrapData(data) {
    return {
      data,
      timestamp: new Date().getTime()
    };
  }
  //获取本地数据
  fetchLocalDate(key) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (error, result) => {
        if (!error) {
          try {
            resolve(JSON.parse(result));
          } catch (e) {
            reject(e);
            console.error(e);
          }
        } else {
          reject(error);
          console.error(error);
        }
      })
    })
  }

  fetchServiceData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('service is failed');
      })
        .then(resData => {
        this.saveData(url, resData);
        resolve(resData);
      })
        .catch(error => {
        reject(error);
      })
    })
  }

  static checkTimestampVaild(timestamp) {
    const currentDate = new Date();
    const targetDate = new Date();
    targetDate.setTime(timestamp);
    if (currentDate.getMonth() !== targetDate.getMonth()) return false;
    if (currentDate.getDate() !== targetDate.getDate()) return false;
    if (currentDate.getHours() - targetDate.getHours() > 4) return false;
    return true;
  }
}


export default DataStore