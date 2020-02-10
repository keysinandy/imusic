import { actionType } from './actionType';

export const showMessage = (data) => ({
  type : actionType.SHOW_MESSAGE,
  data : data
})
