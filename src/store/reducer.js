import { combineReducers } from 'redux';
import { reducer as recommendReducer } from '../page/recommend/store/index';
import { reducer as messageReducer } from '../page/myMessage/store/index';
import { reducer as songListReducer } from '../page/songList/store/index';
import { reducer as playerReducer } from '../page/player/store/index';
export default combineReducers ({
  recommend: recommendReducer,
  message : messageReducer,
  songList :songListReducer,
  player :playerReducer
});