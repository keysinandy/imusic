import React, { useEffect } from 'react';
import Carousel from '../../components/carousel/Carousel';
import * as actionTypes from './store/actionCreator';
import * as playAction from '../player/store/actionCreator';
import { useSelector, useDispatch, useStore } from 'react-redux'
import BannerIcon from './BannerIcon';
import RecommendSongList from './RecommendSongList';
import Scroll from '../../components/scroll/Scroll';
import Header from '../header/Header';
import style from './style.module.scss';
const RecommendIndex = (props) => {
  const { bannerList, songList } = useSelector(state => state.recommend);
  const dispatch = useDispatch(); 
  const store = useStore()
  const width = window.innerWidth - 10;
  const height = 200;
  const query = `?param=${width}y${height}`
  useEffect (() => {
    dispatch(actionTypes.getBannerList(query));
    dispatch(actionTypes.getSongList());
    dispatch(actionTypes.getNewSongList());
    // eslint-disable-next-line 
  }, []);
  const dataList = bannerList ? bannerList : [];
  const HandleScroll = (e)=>{
    // console.log(e)
  }
  const handlePullUp = (e) =>{
    console.log(e,'handlePullUp');
  }

  const handlePullDown = (e) => {
    console.log(e,'handlePullDown');
  }

  const handleBannerClick = (index) =>{
    const state = store.getState();
    dispatch(playAction.addSongById(state.recommend.bannerList[index].targetId));
    dispatch(playAction.showNormanPlayer());
  }
  return <div className={style.recommend}>
    <Header />
    <Scroll outerStyle = {{height : '92vh'}} onScroll = {HandleScroll} pullUp = {handlePullUp} pullDown = {handlePullDown}>  
      <Carousel bgW = {width} bgH = {height} intervalTime={3000} dataList={dataList} clickHandler={handleBannerClick}/>
      <BannerIcon />
      <RecommendSongList dataList = {songList}/>
      {/* <RecommendNewSong dataList = {newSongList}/> */}
    </Scroll>  
  </div>
}
export default React.memo(RecommendIndex);