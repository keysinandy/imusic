import React from 'react';
import style from './songListItem.module.scss';
import icon from '../../icon';
import propTypes from 'prop-types';
const SongListItem = (props) =>{
  const {id,playCount,name,picUrl,clickCb} = props;
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
  return <div className={style.songListItem} key={id}>
    <div className={style.songListItemCover} onClick={clickCb} style = {{backgroundImage:`url(${picUrl})`}}></div>
    <i className={style.songListPlayCount}>{toCompact(playCount)}</i>
    <p className={style.songListName}>{name}</p>
  </div>
}
SongListItem.propTypes = {
  id : propTypes.number,
  playCount : propTypes.number,
  name : propTypes.string,
  picUrl : propTypes.string,
  clickCb : propTypes.func,
}
SongListItem.defaultProps = {
  id : 0,
  name : '',
  playCount : 0,
  picUrl : '',
  clickCb : () => {},
}
export default SongListItem