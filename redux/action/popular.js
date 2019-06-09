import Types from './types';
import DataStore from '../../dataStore';

export function loadPopularData(storeName, url) {
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
function handleData(dispatch, storeName, data) {
  dispatch({
    type: Types.LOAD_POPULAR_SUCCESS,
    items: data && data.data && data.data.items,
    storeName
  })
}