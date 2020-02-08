import { actionType } from './actionType';
import { produce } from 'immer'
const defaultState = {
  bannerList : [],
  songList : [],
  newSongList : [],
};

const reducer = (state = defaultState,action) => {
  switch (action.type) {
    case actionType.CHANGE_BANNER:
      return produce(state,draft=>{
        draft.bannerList = action.data;
      });
    case actionType.CHANGE_SONG_LIST:
      return produce(state,draft=>{
        draft.songList = action.data;
      });
    case actionType.CHANGE_NEW_SONG_LIST:
      return produce(state,draft=>{
        draft.newSongList = action.data;
      });
    default:
      return state;
  }
}

export default reducer;