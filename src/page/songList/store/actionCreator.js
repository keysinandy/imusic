import { actionType } from './actionType';
import { getDailyRecommend } from '../../../api/request';
export const showSongList = (data) => ({
  type : actionType.SHOW_SONG_LIST,
  data : data
})

export const getDailySongList = () => {
  return (dispatch) =>{
    getDailyRecommend().then(data => {
      dispatch (showSongList(data));
    }).catch ((err) => {
      console.error (err,'banner error');
    }) 
  }
}