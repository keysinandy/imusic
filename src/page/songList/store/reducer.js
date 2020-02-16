import { actionType } from './actionType';
import { produce } from 'immer'
const defaultState = {
  songListData : []
};

const reducer = (state = defaultState,action) => {
  switch (action.type) {
    case actionType.SHOW_SONG_LIST:
      return produce(state,draft=>{
        draft.songListData = action.data.recommend
      })
    default:
      return state;
  }
}

export default reducer;