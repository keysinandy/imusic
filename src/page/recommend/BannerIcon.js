import React from 'react';
import icon from '../../icon';
import style from './style.module.scss';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as songListAction from '../../page/songList/store/actionCreator';
import * as playerAction from '../../page/player/store/actionCreator';
const BannerIcon = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDailyRecommend = () => {
    dispatch(songListAction.getDailySongList());
    dispatch(playerAction.changeIsPersonalFm(false));
    history.push('/recommend/songList');
  }
  const handlePersonalFm = () => {
    dispatch(playerAction.changePersonalSongList());
    dispatch(playerAction.showPersonalFmPlayer());
  }

  const handleEnterRank = () => {
    history.push('/recommend/rank');
  }

  const handleEnterPlayList = () => {
    history.push('/recommend/playList');
  }
  return <ul className={style.bannerIcon}>
    <li className={style.bannerItem}>
      <button className={style.bannerBtn} onClick={handleDailyRecommend}> 
        <i className="iconfont">{icon.calendar}</i> 
      </button>
      <i>每日推荐</i>
    </li>
    <li className={style.bannerItem}>
      <button className={style.bannerBtn} onClick={handleEnterPlayList}>
        <i className="iconfont">{icon.songList}</i> 
      </button>
      <i>歌单</i>
    </li>
    <li className={style.bannerItem}>
      <button className={style.bannerBtn} onClick={handleEnterRank}>
        <i className="iconfont">{icon.rank}</i> 
      </button>
      <i>排行榜</i>
    </li>
    <li className={style.bannerItem}>
      <button className={style.bannerBtn} onClick={handlePersonalFm}>
        <i className="iconfont">{icon.like}</i> 
      </button>
      <i>猜你喜欢</i>
    </li>
  </ul>
}

export default React.memo(BannerIcon)