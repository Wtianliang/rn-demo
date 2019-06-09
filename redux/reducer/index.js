import { combineReducers } from 'redux';
import { rootCom, RootRouter } from '../../navigators';
import theme from './theme';
import popular from './popular';

//1.指定默认的state
const navState = RootRouter.router.getStateForAction(
  RootRouter.router.getActionForPathAndParams(rootCom)
)

//2.创建自己的 navigation reducer
const navReducer = (state = navState, action) => {
  const nextState = RootRouter.router.getStateForAction(action, state);
  return nextState || state;
}

//3.合并reducer
export default combineReducers({
  nav: navReducer,
  theme,
  popular
});