import { actionType } from './actionType';
import { produce } from 'immer'
const defaultState = {
  bannerList: [],
};

const reducer = (state = defaultState,action) => {
  switch (action.type) {
    case actionType.CHANGE_BANNER:
      return produce(state,draft=>{
        draft.bannerList = action.data;
      });
    default:
      return state;
  }}
  

export default reducer;