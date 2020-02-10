import { actionType } from './actionType';
import { produce } from 'immer'
const defaultState = {
  messageProps : {
    modifyFlag : false
  }
};

const reducer = (state = defaultState,action) => {
  switch (action.type) {
    case actionType.SHOW_MESSAGE:
      return produce(state,draft=>{
        let modifyFlag = !draft.messageProps.modifyFlag;
        draft.messageProps = {...action.data,modifyFlag};
      });
    default:
      return state;
  }
}

export default reducer;