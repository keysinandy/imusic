import React from 'react';
import icon from '../../icon';
import style from './style.module.scss';
import { useHistory } from 'react-router-dom'
const BannerIcon = (props) => {
  const history = useHistory();
  const handleDailyRecommend = () =>{
    history.push('/songList')
  }
  return <ul className={style.bannerIcon}>
    <li className={style.bannerItem}>
      <button className={style.bannerBtn} onClick={handleDailyRecommend}> 
        <i className="iconfont">{icon.calendar}</i> 
      </button>
      <i>每日推荐</i>
    </li>
    <li className={style.bannerItem}>
      <button className={style.bannerBtn}>
        <i className="iconfont">{icon.songList}</i> 
      </button>
      <i>歌单</i>
    </li>
    <li className={style.bannerItem}>
      <button className={style.bannerBtn}>
        <i className="iconfont">{icon.rank}</i> 
      </button>
      <i>排行榜</i>
    </li>
    <li className={style.bannerItem}>
      <button className={style.bannerBtn}>
        <i className="iconfont">{icon.like}</i> 
      </button>
      <i>猜你喜欢</i>
    </li>
  </ul>
}

export default React.memo(BannerIcon)