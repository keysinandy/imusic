import { actionType } from './actionType';
import { getBannerRequest, getRecommendSongList, getRecommendNewSong } from '../../../api/request';
export const changeBannerList = (data) => ({
  type : actionType.CHANGE_BANNER,
  data : data
})

export const changeSongList = (data) => ({
  type : actionType.CHANGE_SONG_LIST,
  data : data
})

export const changeNewSongList = (data) => ({
  type : actionType.CHANGE_NEW_SONG_LIST,
  data : data
})
export const getBannerList = (query) => {
  return (dispatch) =>{
    getBannerRequest ().then (data => {
      dispatch (changeBannerList (data.banners.map(v => {
        v.imageUrl += query;
        return v;
      }).filter(v=>v.targetType === 1)));
    }).catch ((err) => {
      console.error (err,'getBannerList error');
    }) 
  }
}

export const getSongList = (query) => {
  return (dispatch) =>{
    getRecommendSongList ().then (data => {
      dispatch (changeSongList (data.result.map(v => {
        v.imageUrl += query;
        return v;
      })));
    }).catch ((err) => {
      console.error (err,'getSongList error');
    }) 
  }
}

export const getNewSongList = (query) => {
  return (dispatch) =>{
    getRecommendNewSong ().then (data => {
      dispatch (changeNewSongList (data.result.map(v => {
        v.imageUrl += query;
        return v;
      })));
    }).catch ((err) => {
      console.error (err,'getNewSongList error');
    }) 
  }
}