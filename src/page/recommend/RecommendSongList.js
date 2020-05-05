import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as songListAction from '../songList/store/actionCreator';
import style from './style.module.scss';
import SongListItem from '../../components/songListItem/SongListItem';

const RecommendSongList = (props) => {
  const { dataList } = props;

  const dispatch = useDispatch();
  const history = useHistory();
  const width = Math.round (0.3 * window.innerWidth);
  const query =`?param=${width}y${width}`;


  const handleSongListClick = (id) =>{
    return () => {
      dispatch(songListAction.ShowSongListDetailById(id));
      history.push('/songList');
    }
  }
  return <div className={style.songList}>
    <h1 className={style.songListTitle}>推荐歌单</h1>
    <div className={style.songListBody}>
      {dataList.map(v=>{
        return <SongListItem key={v.id} id={v.id} name={v.name} playCount={v.playCount} picUrl={`${v.picUrl}${query}`} clickCb={handleSongListClick(v.id)}/>
      })}
    </div>
  </div>
}

export default React.memo(RecommendSongList);