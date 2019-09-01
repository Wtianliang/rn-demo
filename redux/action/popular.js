import Types from './types';
import DataStore from '../../dataStore';

export function loadPopularData(storeName, url, pageSize) {
  return dispatch => {
    dispatch({
      type: Types.POPULAR_REFRESH,
      storeName,
    });
    let dataStore = new DataStore();
    dataStore.fetchData(url)
      .then(data => {
        handleData(dispatch, storeName, data);
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: Types.LOAD_POPULAR_FAIL,
          storeName,
          error
        })
      })
  }
}

export function loadMorePopular(storeName, pageIndex, pageSize, dataArray=[], callback) {
  return dispatch => {
    setTimeout(() => {
      if ((pageIndex - 1 * pageSize) >= dataArray.length) {
        if (typeof callback === 'function') {
          callback('no more');
        }
        dispatch({
          type: Types.LOAD_MORE_POPULAR_FAIL,
          error: 'no more',
          storeName,
          pageIndex: --pageIndex,
          projectModes: dataArray
        })
      } else {
        let max = pageSize * pageIndex > dataArray.length ? dataArray.length : pageSize * pageIndex;
        dispatch({
          type: Types.LOAD_MORE_POPULAR_SUCCESS,
          storeName,
          pageIndex,
          projectModes: dataArray.slice(0, max)
        })
      }
    }, 500)
  }
}

function handleData(dispatch, storeName, data, pageSize) {
  let fixItems = [];
  if (data && data.data && data.data.items) {
    fixItems = data.data.items
  }
  dispatch({
    type: Types.LOAD_POPULAR_SUCCESS,
    projectModes: pageSize > fixItems.length ? fixItems : fixItems.slice(0, pageSize),
    storeName,
    pageIndex: 1
  })
}