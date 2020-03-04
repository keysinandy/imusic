import { combineReducers } from 'redux';
import { reducer as recommendReducer } from '../page/recommend/store/index';
import { reducer as messageReducer } from '../page/myMessage/store/index';
import { reducer as songListReducer } from '../page/songList/store/index';
import { reducer as playerReducer } from '../page/player/store/index';
import { reducer as meReducer } from '../page/me/store/index';
export default combineReducers ({
  recommend: recommendReducer,
  message : messageReducer,
  songList :songListReducer,
  player :playerReducer,
  me : meReducer,
});