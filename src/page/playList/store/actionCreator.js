import { actionType } from './actionType';
import { getHotPlaylist, getPlaylistByTag } from '../../../api/request';

const LIMIT_NUM = 18;

const setTagList = (data) => ({
  type : actionType.SET_HOT_TAG_LIST,
  data : data
})

const setPlayList = (data) => ({
  type : actionType.REPLACE_LIST,
  data : data
})

const appendPlayList = (data) => ({
  type : actionType.APPEND_LIST,
  data : data
})

export const showTagList = () => {
  return (dispatch) =>{
    getHotPlaylist().then(data=>{
      dispatch(setTagList(data.tags))
    }).catch(e=>{
      console.error(e,'showTagList error')
    })
  }
}

export const showPlayList = (tagName) => {
  return (dispatch) =>{
    getPlaylistByTag(LIMIT_NUM,tagName).then(data=>{
      dispatch(setPlayList(data.playlists))
    }).catch(e=>{
      console.error(e,'showPlayList error')
    })
  }
}

export const addPlayList = (tagName,offset,loadCb) => {
  return (dispatch) =>{
    getPlaylistByTag(LIMIT_NUM,tagName,offset * LIMIT_NUM).then(data=>{
      if (typeof loadCb === 'function') {
        loadCb();
      }
      dispatch(appendPlayList(data.playlists))
    }).catch(e=>{
      console.error(e,'addPlayList error')
    })
  }
}