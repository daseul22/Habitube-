import { combineReducers } from 'redux';
//import reducers
import action from './action';
import mypage from './mypage';
import videolist from './videolist';
import todayComplete from './todaycomplete';

export default combineReducers({
  action,
  mypage,
  videolist,
  todayComplete,
});
