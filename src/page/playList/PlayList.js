import React, { useState } from 'react';
import icon from '../../icon';
import { useDispatch, useSelector, useStore } from 'react-redux';
import * as playerAction from '../player/store/actionCreator';
import * as playListAction from './store/actionCreator';
import * as songListAction from '../songList/store/actionCreator';
import style from './playList.module.scss';
import TabList from '../../components/tabList/TabList';
import Scroll from '../../components/scroll/Scroll';
import SongListItem from '../../components//songListItem/SongListItem'
import { useEffect } from 'react';
const PlayList = (props) => {
  const { history } = props;
  const store = useStore();
  const dispatch = useDispatch();
  const { tagList,playList,offset } = useSelector(state=>state.playList);
  const [isPullUpLoading, setIsPullUpLoading] =  useState(false);
  const [tagName, setTagName] =  useState('');
  useEffect(()=>{
    dispatch(playListAction.showTagList())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const handleBack = () => {
    history.push('/recommend/index');
  }
  const handleListenClick = () => {
    if(store.getState().player.songList.length > 0) {
      dispatch(playerAction.showPlayer())
    }
  }

  const handleTabClick = (item) => {
    if (item) {
      setTagName(item.name)
      dispatch(playListAction.showPlayList(item.name))
    }
  }
  const width = Math.round (0.3 * window.innerWidth);
  const query =`?param=${width}y${width}`;

  const handleItemClick = (id) =>{
    return () => {
      dispatch(songListAction.ShowSongListDetailById(id));
      history.push('/songList');
    }
  }

  const handlePullUp = () =>{
    if (!isPullUpLoading) {
      setIsPullUpLoading(true);
      dispatch(playListAction.addPlayList(tagName,offset,()=>setIsPullUpLoading(false)));
    }
  }
  return <div>
    <header className={style.header}>
      <button onClick={handleBack}>
        <i className="iconfont">{icon.left}</i>
      </button>
      <h1>歌单广场</h1>
      <button onClick={handleListenClick}> <i className="iconfont">{icon.listen}</i> </button>
    </header>
    <TabList item={tagList} clickCb={handleTabClick}/>
    <div className={style.listBg}>
      <Scroll outerStyle = {{height : '85vh'}} pullUp={handlePullUp} pullUpLoading = {isPullUpLoading}>
        <ul className={style.list}>
          {playList.map(v=>{
            return <SongListItem key={v.id} id={v.id} name={v.name} playCount={v.playCount} picUrl={`${v.coverImgUrl}${query}`} clickCb={handleItemClick(v.id)}/>
          })}
        </ul>
      </Scroll>
    </div>
  </div>
}

export default React.memo(PlayList)