import React, { useEffect } from 'react';
import style from './songList.module.scss';
import icon from '../../icon';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch, useStore} from 'react-redux';
import * as actionTypes from './store/actionCreator';
import * as playerAction from '../player/store/actionCreator';
import Scroll from '../../components/scroll/Scroll';
import bannerPic from '../../assets/imgs/banner1.jpg'
const SongList = (props) => {
  const { songListData,firstTitle,secondTitle,isPlaylist,bannerPicUrl,playlistId,subscribed } = useSelector(state => state.songList);
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useStore();
  const handleBack = () => {
    history.goBack();
  }
  const handlePlay = (e) =>{
    let song = songListData.filter(v=>v.id === parseInt(e.currentTarget.id));
    if (song[0]) {
      dispatch(playerAction.changeSongList(songListData));
      dispatch(playerAction.changePlayingSong(song[0]));
      dispatch(playerAction.addSong(song[0]));
      dispatch(playerAction.showNormanPlayer());
      
    }
  }
  const handleListenClick = () => {
    if(store.getState().player.songList.length > 0) {
      dispatch(playerAction.showNormanPlayer())
    }
  }

  const innerWidth = window.innerWidth;
  const listPicSize = Math.round(0.15 * innerWidth);

  const handlePlayAll = () => {
    let song = songListData[0]
    if (song) {
      dispatch(playerAction.changeSongList(songListData));
      dispatch(playerAction.changePlayingSong(song));
      dispatch(playerAction.addSong(song));
      dispatch(playerAction.showNormanPlayer());
    }
  }

  const handleScribe = () => {
    if (subscribed) {
      dispatch(actionTypes.setSongListSubscribe(2,playlistId))
    } else {
      dispatch(actionTypes.setSongListSubscribe(1,playlistId))
    }
  }
  return <div className={style.songList}>
    <div className={style.banner}>
      <div className={style.bannerImage} style={{backgroundImage:`url(${bannerPicUrl ? bannerPicUrl : bannerPic})`}}></div>
      <div className={style.topBar}>
        <button onClick={handleBack}><i className="iconfont">{icon.left}</i></button>
        <button onClick={handleListenClick}><i className="iconfont">{icon.listen}</i></button>
      </div>
      <h1 className={style.firstTitle}>
        {firstTitle}
      </h1>
      <h2 className={style.secondTitle}>
        {secondTitle}
      </h2>
    </div>
    <div className={style.playAll}>
      <button className={style.playAllBtn} onClick={handlePlayAll}><i className={`iconfont ${style.icon}`}>{icon.pause}</i><i className={style.playAllText}> 播放全部</i></button>
      <button className={style.subscribe} onClick={handleScribe} hidden={!isPlaylist}>
        {subscribed ? '取消收藏' : <i className={`iconfont ${style.subscribeIcon}`}>{icon.add} <i style={{fontSize:14}}>收藏</i></i>}
      </button>
    </div>
    
    <div className={style.listBg}>
      <Scroll outerStyle = {{height : '50vh',position:'relative',zIndex:-100}}>
        <ul className={style.list}>
          {songListData.map(v=>{
            return <li id={v.id} key={v.id} className={style.listItem} onClick={handlePlay}>
              <div className={style.listPic} style={{
                background:`url(${v.album.picUrl}?param=${listPicSize}y${listPicSize})`,
                width :`${listPicSize}px`,
                height : `${listPicSize}px`
                }}></div>
                <i className={`iconfont ${style.soundIcon}`} hidden>{icon.sound}</i>
                <div className={style.sound}>
                  <p className={style.soundName}>{v.name}</p>
                  <p className={style.artist}>{v.artists[0].name}-{v.album.name}</p>
                </div>
            </li>
          })}
        </ul>
      </Scroll>
    </div>
 
  </div>
}

export default React.memo(SongList);