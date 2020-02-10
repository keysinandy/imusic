import { actionType } from './actionType';

export const showMessage = (data) => ({
  type : actionType.SHOW_MESSAGE,
  data : data
})

export const showLoading = (data) => ({
  type : actionType.CHANGE_LOADING,
  data : data
})

