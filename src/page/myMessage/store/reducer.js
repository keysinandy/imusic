import { actionType } from './actionType';
import { produce } from 'immer'
const defaultState = {
  messageProps : {
    modifyFlag : false
  },
  loadingProps : {
    showFlag : false,
  }
};

const reducer = (state = defaultState,action) => {
  switch (action.type) {
    case actionType.SHOW_MESSAGE:
      return produce(state,draft=>{
        let modifyFlag = !draft.messageProps.modifyFlag;
        draft.messageProps = {...action.data,modifyFlag};
      });
      case actionType.CHANGE_LOADING:
        return produce(state,draft=>{
          draft.loadingProps = {...action.data};
        });
    default:
      return state;
  }
}

export default reducer;