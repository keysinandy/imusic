import React, { useEffect } from 'react';
import style from './songList.module.scss';
import icon from '../../icon';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import * as actionTypes from './store//actionCreator';
import Scroll from '../../components/scroll/Scroll';
const SongList = (props) => {
  const { firstTitle, secondTitle } = props;
  const { songListData } = useSelector(state => state.songList);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  }
  const handlePlay = (e) =>{
  }
  useEffect(() => {
    dispatch(actionTypes.getDailySongList())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const innerWidth = window.innerWidth;
  const listPicSize = Math.round(0.15 * innerWidth);
  return <div className={style.songList}>
    <div className={style.banner}>
      <div className={style.bannerImage}></div>
      <div className={style.topBar}>
        <button onClick={handleBack}><i className="iconfont">{icon.left}</i></button>
        <button><i className="iconfont">{icon.listen}</i></button>
      </div>
      <h1 className={style.firstTitle}>
        每日推荐
      </h1>
      <h2 className={style.secondTitle}>
        02/11
      </h2>
    </div>
    <div className={style.playAll}>
      <button className={style.playAllBtn}><i className={`iconfont ${style.icon}`}>{icon.pause}</i><i className={style.playAllText}> 播放全部</i></button>
    </div>
    
    <div className={style.listBg}>
      <Scroll outerStyle = {{height : '70vh',position:'relative',zIndex:-100}}>
        <ul className={style.list}>
          {songListData.map(v=>{
            return <li key={v.id} className={style.listItem} onClick={handlePlay}>
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