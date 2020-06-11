import { actionType } from './actionType';
import { produce } from 'immer'
const defaultState = {
  tagList : [],
  playList:[],
  offset :0
};

const reducer = (state = defaultState,action) => {
  switch (action.type) {
    case actionType.SET_HOT_TAG_LIST:
      return produce(state,draft=>{  
        draft.tagList = action.data;
      });
    case actionType.REPLACE_LIST:
      return produce(state,draft=>{  
        draft.playList = action.data;
        draft.offset = 1;
      });
    case actionType.APPEND_LIST:
      return produce(state,draft=>{  
        draft.playList = state.playList.concat(action.data);
        draft.offset += 1;
      });
    default:
      return state;
  }
}

export default reducer;