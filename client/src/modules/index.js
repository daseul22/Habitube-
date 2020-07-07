import { combineReducers } from 'redux';
//import reducers
import action from './action';
import mypage from './mypage';
import videolist from './videolist';

export default combineReducers({
  action,
  mypage,
  videolist,
});
