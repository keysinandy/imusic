import { actionType } from './actionType';
import { produce } from 'immer';
const defaultState = {
  userDetail : {},
  likeSongList : [],
};

const reducer = (state = defaultState,action) => {
  switch (action.type) {
    case actionType.ADD_LIKE_SONG:
      return produce(state,draft=>{
        draft.likeSongList.unshift(action.data)
      });
    case actionType.MINUS_LIKE_SONG:
      return produce(state,draft=>{
        draft.likeSongList = draft.likeSongList.filter(v=>v !== action.data)
      });
    case actionType.CHANGE_LIKE_SONG:
      return produce(state,draft=>{
        draft.likeSongList = action.data;
      });
    case actionType.CHANGE_USER_DETAIL:
      return produce(state,draft=>{
        draft.userDetail = action.data
      });
    default:
      return state;
  }
}

export default reducer;