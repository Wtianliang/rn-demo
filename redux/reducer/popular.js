import Types from '../action/types';

const defaultState = {
  theme: 'blue'
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case Types.POPULAR_REFRESH_SUCCESS: //下拉刷新成功
      return {
        ...state,
        [action.storeName]: {
          ...state[action.storeName],
          items: action.items, // 原始数据
          projectModes: action.projectModes, //要展示的数据
          isLoading: false,
          hideLoadingMore: false,
          pageIndex: action.pageIndex
        }
      };
    case Types.POPULAR_REFRESH:
      return {
        ...state,
        [action.storeName]: {
          ...state[action.storeName],
          isLoading: true
        }
      };
    case Types.POPULAR_REFRESH_FAIL: // 下拉刷新失败
      return {
        ...state,
        [action.storeName]: {
          ...state[action.storeName],
          isLoading: false
        }
      };
    case Types.LOAD_MORE_POPULAR_SUCCESS: // 加载更多成功
      return {
        ...state,
        [action.storeName]: {
          ...state[action.storeName],
          projectModes: action.projectModes,
          hideLoadingMore: false,
          pageIndex: action.pageIndex
        }
      };
    case Types.LOAD_MORE_POPULAR_FAIL: // 加载更多失败
      return {
        ...state,
        [action.storeName]: {
          ...state[action.storeName],
          hideLoadingMore: true,
          pageIndex: action.pageIndex
        }
      };
    default:
      return state;
  }
}