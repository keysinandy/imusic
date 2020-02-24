import { actionType } from './actionType';
import { produce } from 'immer';

const defaultState = {
  currentSong : null,
  songList : [],
  isHidden : true,
  currentSongUrl : '',
  currentSongLyric : '',
  currentSongIndex :0,
};

const songUrlPrev = `https://music.163.com/song/media/outer/url`;
const reducer = (state = defaultState,action) => {
  switch (action.type) {
    case actionType.CHANGE_PLAYING_SONG:
      return produce(state,draft=>{
        if (draft.currentSong === null || draft.currentSong.id !== action.data.id) {
          draft.currentSong = action.data;
        }
      });
    case actionType.CHANGE_SONG_LIST:
      return produce(state,draft=>{
        draft.songList = action.data;
      });
    case actionType.ADD_SONG:
      return produce(state,draft=>{
        if (draft.songList.filter(v=>v.id === action.data.id).length === 0) {
          draft.songList.push(action.data)
        }
      });
    case actionType.MINUS_SONG:
      return produce(state,draft=>{
        draft.songList = draft.songList.filter(v=>v.id !== action.data);
      });
    case actionType.HIDE_PLAYER:
      return produce(state,draft=>{
        draft.isHidden = true;
      })
    case actionType.SHOW_PLAYER:
      return produce(state,draft=>{
        draft.isHidden = false;
      })
    case actionType.CHANGE_SONG_URL:
      return produce(state,draft=>{
        draft.currentSongUrl = `${songUrlPrev}?id=${action.data}.mp3`;
      })
    case actionType.CHANGE_LYRIC:
      return produce(state,draft=>{
        draft.currentSongLyric = action.data;
      })
    case actionType.CHANGE_PLAYING_SONG_INDEX:
      return produce(state,draft=>{
        draft.currentSongIndex = action.data;
      })
    default:
      return state;
  }
}

export default reducer;