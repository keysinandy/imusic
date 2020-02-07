import { actionType } from './actionType';
import { getBannerRequest, getRecommendSongList } from '../../../api/request';
export const changeBannerList = (data) => ({
  type : actionType.CHANGE_BANNER,
  data : data
})

export const changeSongList = (data) => ({
  type : actionType.CHANGE_SONG_LIST,
  data : data
})

export const getBannerList = (query) => {
  return (dispatch) =>{
    getBannerRequest ().then (data => {
      dispatch (changeBannerList (data.banners.map(v => {
        v.imageUrl += query;
        return v;
      })));
    }).catch ((err) => {
      console.error (err,'banner error');
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
      console.error (err,'banner error');
    }) 
  }
}