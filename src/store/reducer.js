import { combineReducers } from 'redux';
import { reducer as recommendReducer } from '../page/recommend/store/index';
import { reducer as messageReducer } from '../page/myMessage/store/index';
export default combineReducers ({
  recommend: recommendReducer,
  message : messageReducer
});