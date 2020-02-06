import { combineReducers } from 'redux';
import { reducer as recommendReducer } from '../page/recommend/store/index';

export default combineReducers ({
  recommend: recommendReducer,
});