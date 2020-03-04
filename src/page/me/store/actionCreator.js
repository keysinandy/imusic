import { actionType } from './actionType';
import { likeSong, likeList, userDetail } from '../../../api/request';


export const addLikeSong = (data) => ({
  type : actionType.ADD_LIKE_SONG,
  data : data
})

export const minusLikeSong = (data) => ({
  type : actionType.MINUS_LIKE_SONG,
  data : data
})

export const changeLikeSong = (data) => ({
  type : actionType.CHANGE_LIKE_SONG,
  data : data
})
export const changeUserDetail = (data) => ({
  type : actionType.CHANGE_USER_DETAIL,
  data : data
})

export const init = () => ({
  type : actionType.INIT,
})

export const like = (id) => {
  return (dispatch) =>{
    likeSong(id,true).then(data => {
      dispatch(addLikeSong(id));
    }).catch ((err) => {
      console.error (err,'like error');
    }) 
  }
}

export const unLike = (id) => {
  return (dispatch) =>{
    likeSong(id,false).then(data => {
      console.log('unlikel')
      dispatch(minusLikeSong(id));
    }).catch ((err) => {
      console.error (err,'unLike error');
    }) 
  }
}
export const setLikeSong = (uid) => {
  return (dispatch) =>{
    likeList(uid).then(data => {
      dispatch(changeLikeSong(data.ids));
    }).catch ((err) => {
      console.error (err,'setLikeSong error');
    }) 
  }
}
export const setUserDetail = (uid) => {
  return (dispatch) =>{
    userDetail(uid).then(data => {
      dispatch(changeUserDetail(data));
    }).catch ((err) => {
      console.error (err,'setLikeSong error');
    }) 
  }
}

export const initMe = (uid) => {
  return (dispatch) =>{
    dispatch(setUserDetail(uid));
    dispatch(setLikeSong(uid));
  }
}