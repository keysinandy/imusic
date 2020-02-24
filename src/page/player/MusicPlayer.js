import React, { useState, useRef, useEffect, useCallback } from 'react';
import style from './musicPlayer.module.scss';
import icon from '../../icon';
import { useSelector, useDispatch } from 'react-redux';
import LyricList from '../../components/lyricList/LyricList';
import * as messageAction from '../myMessage/store/actionCreator';
import * as actionTypes from './store/actionCreator';
import * as utils from '../../utils/utils';
const MusicPlayer = () => {
  const { isHidden, currentSong, songList, currentSongIndex, currentSongUrl, currentSongLyric } = useSelector(state => state.player);
  const width = Math.ceil(window.innerWidth * 1.2);
  const height = Math.ceil(window.innerHeight * 1.2);
  const dispatch = useDispatch();
  const range = useRef();
  const audio = useRef();
  const CIRCLE_CONSTANTS = {
    single : icon.singleCircle,
    list : icon.listCircle,
    random : icon.randomCircle
  }

  const [rangeValue,setRangeValue] = useState(0);
  const [circleType, setCircleType] = useState(CIRCLE_CONSTANTS.list);
  const [playState, setPlayState] = useState(true);
  const [currentSongTime, setCurrentSongTime] = useState(0);
  //切换音乐时播放音乐
  useEffect(()=>{
    if (currentSong) {
      dispatch(actionTypes.changeSongUrl(currentSong.id));
      dispatch(actionTypes.getSongLyric(currentSong.id));
      // audio.current.load();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentSong])
  const handleHide = useCallback(() => {
    dispatch(actionTypes.hidePlayer());
  },[dispatch]);
  const handleShowList = () => {

  };
  //进度条变化
  const handleRangeChange = useCallback(() => {
    setRangeValue(parseInt(range.current.value));
    audio.current.currentTime = parseInt(range.current.value) * audio.current.duration * 0.01;
  },[]);

  //单曲循环、列表循环、随机
  const handleCircleClick = useCallback( () => {
    switch (circleType) {
      case CIRCLE_CONSTANTS.single:
        dispatch(messageAction.showMessage({content:'列表循环'}));
        setCircleType(CIRCLE_CONSTANTS.list);
        break;
      case CIRCLE_CONSTANTS.list:
        setCircleType(CIRCLE_CONSTANTS.random);
        dispatch(messageAction.showMessage({content:'随机播放'}));
        break;
      case CIRCLE_CONSTANTS.random:
        setCircleType(CIRCLE_CONSTANTS.single);
        dispatch(messageAction.showMessage({content:'单曲循环'}));
        break;      
      default:
        setCircleType(CIRCLE_CONSTANTS.single);
        dispatch(messageAction.showMessage({content:'单曲循环'}));
        break;
    }
  },[CIRCLE_CONSTANTS,circleType,dispatch])

  const handlePrev = () => {
    let length = songList.length;
    if (length < 2) {
      return ;
    }
    let indexValue = 0;
    if (circleType === CIRCLE_CONSTANTS.list) {
      indexValue = currentSongIndex === 0 ? length - 1 : currentSongIndex - 1;
    } else if (circleType === CIRCLE_CONSTANTS.random) {
      indexValue = Math.floor(Math.random() * length);
    }
    dispatch(actionTypes.changePlayingSong(songList[indexValue]));
    dispatch(actionTypes.changePlayingSongIndex(indexValue));
  }
  const handleNext = () => {
    let length = songList.length;
    if (length < 2) {
      return ;
    }
    let indexValue = 0;
    if (circleType === CIRCLE_CONSTANTS.list) {
      indexValue = currentSongIndex === length - 1 ? 0 : currentSongIndex + 1;
    } else if (circleType === CIRCLE_CONSTANTS.random) {
      indexValue = Math.floor(Math.random() * length);
    }
    
    dispatch(actionTypes.changePlayingSong(songList[indexValue]));
    dispatch(actionTypes.changePlayingSongIndex(indexValue));
  }
  const handleTogglePlay = useCallback(() => {
    if (playState) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
    setPlayState(!playState);
  },[playState])
  const handleShowSongList = () => {

  }

  const handleAudioTimeUpdate = (e) =>{
    let ratio = e.target.currentTime / e.target.duration * 100;
    if (!Number.isNaN(ratio)) {
      setRangeValue(ratio);
    }
    setCurrentSongTime(e.target.currentTime)
  }

  const handleAudioEnded = (e) => {
    switch (circleType) {
      case CIRCLE_CONSTANTS.single:
        audio.current.currentTime = 0;
        audio.current.play();
        break;
      case CIRCLE_CONSTANTS.list:
        handleNext()
        break;
      case CIRCLE_CONSTANTS.random:
        handleNext()
        break;
      default:
        break;
    }
  }
  return (<div hidden={isHidden}>
    <img src={currentSong ? currentSong.album.picUrl + `?param=${width}y${height}` : ''} alt=""  style={{
        width: '120vw',
        height: '120vh',
        position: 'fixed',
        top: '-10vh',
        left: '-10vw',
        zIndex:1090,
        filter:'blur(20px)',
    }}/>
    <div className={style.player}>
      <header className={style.header}>
        <button className={style.backBtn} onClick={handleHide}>
          <i className="iconfont">{icon.left}</i>
        </button>
        <div className={style.title}>
          <p className={style.songName}>{currentSong ? currentSong.name : ''}</p>
          <p className={style.artistName}>{currentSong ? currentSong.artists[0].name : ''}</p>
        </div>
        <button className={style.more} onClick={handleShowList}>
          <i className="iconfont">{icon.more}</i>
        </button>
      </header>
      <main className={style.main}>
        <LyricList lyricString = {currentSongLyric} currentTime={currentSongTime} lyricId={currentSong ? currentSong.id : 0}/>
      </main>
      <footer className={style.footer}>
        <audio src={currentSongUrl} autoPlay ref={audio} onTimeUpdate={handleAudioTimeUpdate} onEnded={handleAudioEnded}>
          
        </audio>
        <div className={style.range}>
          <p className={style.currentTime}>{currentSong ? utils.mill2mmss(currentSong.duration * rangeValue * 0.01) : '00:00'}</p>
          <div>
            <div className={style.pre} style={{
                background:`linear-gradient(to right,#ffa400 ${rangeValue}%,#0000 ${rangeValue - 8}%)`
              }}>
            </div>
            <input className={style.input} style={{
              background:`linear-gradient(to right,#0000 ${rangeValue}%,#aaa ${rangeValue - 8}%)`
            }} ref={range} type="range" value={rangeValue} onChange={handleRangeChange}/>
          </div>
          <p className={style.totalTime}>{currentSong ? utils.mill2mmss(currentSong.duration) : '00:00'}</p>
        </div>
        <div className={style.bottomIcon}>
          <button onClick={handleCircleClick} className={style.circleBtn}><i className="iconfont">{circleType}</i></button>
          <button onClick={handlePrev} className={style.prev}><i className="iconfont">{icon.prevSong}</i></button>
          <button onClick={handleTogglePlay} className={style.play}><i className="iconfont">{playState ? icon.play : icon.pause}</i></button>
          <button onClick={handleNext} className={style.next}><i className="iconfont">{icon.nextSong}</i></button>
          <button onClick={handleShowSongList} className={style.songList}><i className="iconfont">{icon.playerSongList}</i></button>
        </div>
      </footer>
    </div>
  </div>)
}

export default React.memo(MusicPlayer)