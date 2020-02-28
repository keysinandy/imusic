import { actionType } from './actionType';
import { getDailyRecommend,getSongListDetail } from '../../../api/request';

export const showSongList = (data) => ({
  type : actionType.SHOW_SONG_LIST,
  data : data
})
export const setTitle = (data) => ({
  type : actionType.SET_TITLE,
  data : data
})
export const setIsPlaylist = (data) => ({
  type : actionType.CHANGE_IS_PLAYLIST,
  data : data
})
export const setBanner = (data) => ({
  type : actionType.CHANGE_BANNER,
  data : data
})
export const setPlaylistId = (data) => ({
  type : actionType.CHANGE_PLAYLIST_ID,
  data : data
})
export const showSongListById = (data) => ({
  type : actionType.SHOW_SONG_LIST_BY_ID,
  data :data
})
export const setSubscribed = (data) => ({
  type : actionType.CHANGE_SUBSCRIBED,
  data :data
})
export const getDailySongList = () => {
  return (dispatch) =>{
    getDailyRecommend().then(data => {
      dispatch (showSongList(data.recommend));
      dispatch(setBanner(data.recommend[0].album.picUrl));
      dispatch(setIsPlaylist(false));
      dispatch(setPlaylistId(-1));
      dispatch(setSubscribed(false));
      dispatch(setTitle({
        firstTitle : '每日推荐',
        secondTitle : `${new Date().getMonth()+1}/${new Date().getDate()}`
      }));
    }).catch ((err) => {
      console.error (err,'banner error');
    }) 
  }
}
export const ShowSongListDetailById = (id) => {
  return (dispatch) =>{
    getSongListDetail(id).then(data => {
      const res = data.playlist.tracks.map(v=>{
        v.artists = v.ar;
        v.album = v.al;
        v.duration = v.dt;
        return v;
      })
      dispatch(showSongList(res));
      dispatch(setBanner(data.playlist.coverImgUrl));
      dispatch(setIsPlaylist(true));
      dispatch(setSubscribed(data.playlist.subscribed));
      dispatch(setPlaylistId(data.playlist.id));
      dispatch(setTitle({
        firstTitle : data.playlist.name,
        secondTitle : data.playlist.creator.nickname
      }))
    }).catch ((err) => {
      console.error (err,'banner error');
    }) 
  }
}