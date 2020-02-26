import { actionType } from './actionType';
import { getLyric, getSongDetail } from '../../../api/request';
export const changePlayingSong = (data) => ({
  type : actionType.CHANGE_PLAYING_SONG,
  data : data
})
export const changePlayingSongIndex = (data) => ({
  type : actionType.CHANGE_PLAYING_SONG_INDEX,
  data : data
})
export const changeSongList = (data) => ({
  type : actionType.CHANGE_SONG_LIST,
  data : data
})

export const addSong = (data) => ({
  type : actionType.ADD_SONG,
  data : data
})

export const minusSong = (data) => ({
  type : actionType.MINUS_SONG,
  data : data
})

export const showPlayer = () => ({
  type : actionType.SHOW_PLAYER,
})

export const hidePlayer = () => ({
  type : actionType.HIDE_PLAYER,
})
export const changeLyric = (data) => ({
  type : actionType.CHANGE_LYRIC,
  data : data
})
export const changeSongUrl = (data) => ({
  type : actionType.CHANGE_SONG_URL,
  data : data
})
export const getSongLyric = (id) => {
  return (dispatch) =>{
    getLyric(id).then (data => {
      dispatch (changeLyric(data.lrc.lyric));
    }).catch ((err) => {
      console.error (err,'Lyric error');
    }) 
  }
}

export const addSongById = (id) => {
  return (dispatch) =>{
    getSongDetail(id).then (data => {
      let song = data.songs[0];
      if (song.ar) {
        song.artists = song.ar;
      }
      if (song.dt) {
        song.duration = song.dt;
      }

      if (song.al) {
        song.album = song.al;
      }
      dispatch(changePlayingSong(song));
      dispatch(addSong(song));
    }).catch ((err) => {
      console.error (err,'Lyric error');
    }) 
  }
}