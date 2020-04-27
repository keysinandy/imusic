import { actionType } from './actionType';
import { produce } from 'immer'
const defaultState = {
  songListData : [],
  firstTitle : '',
  secondTitle : '',
  isPlaylist : false,
  bannerPicUrl : '',
  playlistId : -1,
  subscribed : false,
  isPersonFm : false,
};

const reducer = (state = defaultState,action) => {
  switch (action.type) {
    case actionType.SHOW_SONG_LIST:
      return produce(state,draft=>{
        draft.songListData = action.data
      })
    case actionType.SET_TITLE: 
      return produce(state,draft => {
        draft.firstTitle = action.data.firstTitle;
        draft.secondTitle = action.data.secondTitle;
      })
    case actionType.CHANGE_IS_PLAYLIST:
      return produce(state,draft => {
        draft.isPlaylist = action.data;
      })
    case actionType.CHANGE_PLAYLIST_ID:
      return produce(state,draft => {
        draft.playlistId = action.data;
      })
    case actionType.CHANGE_BANNER:
      return produce(state,draft => {
        draft.bannerPicUrl = action.data;
      })
    case actionType.CHANGE_SUBSCRIBED:
      return produce(state,draft => {
        draft.subscribed = action.data;
      })
    default:
      return state;
  }
}

export default reducer;