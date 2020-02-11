import React from 'react';

import style from './style.module.scss';

const RecommendSongList = (props) => {
  const { dataList } = props;
  const width = Math.round (0.3 * window.innerWidth);
  const query =`?param=${width}y${width}`;
  const toCompact = (number) => {
    number = number.toString();
    if (number.length <= 4) {
      return number;
    } else if (number.length <= 8){
      return number.slice(0,-4) + '万';
    } else {
      return number.slice(0,-8) + '亿';
    }
  }
  return <div className={style.songList}>
    <h1 className={style.songListTitle}>推荐歌单</h1>
    <div className={style.songListBody}>
      {dataList.map(v=>{
        return <div className={style.songListItem} key={v.id}>
          <div className={style.songListItemCover} style = {{backgroundImage:`url(${v.picUrl}${query})`}}></div>
          <i className={style.songListPlayCount}>{toCompact(v.playCount)}</i>
          <p className={style.songListName}>{v.name}</p>
        </div>
      })}
    </div>
  </div>
}

export default React.memo(RecommendSongList);