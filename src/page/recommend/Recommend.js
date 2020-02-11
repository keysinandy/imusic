import React, { useEffect } from 'react';
import Carousel from '../../components/carousel/Carousel';
import * as actionTypes from './store/actionCreator';
import { useSelector, useDispatch } from 'react-redux'
import BannerIcon from './BannerIcon';
import RecommendSongList from './RecommendSongList';
// import RecommendNewSong from './RecommendNewSong';
import Scroll from '../../components/scroll/Scroll';
import style from './style.module.scss';
const Recommend = (props) => {
  const { bannerList, songList } = useSelector(state => state.recommend);
  const dispatch = useDispatch(); 
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
  return <div className={style.recommend}>
    <Scroll outerStyle = {{height : '92vh'}} onScroll = {HandleScroll} pullUp = {handlePullUp} pullDown = {handlePullDown}>  
      <Carousel bgW = {width} bgH = {height} intervalTime={3000} dataList={dataList}/>
      <BannerIcon />
      <RecommendSongList dataList = {songList}/>
      {/* <RecommendNewSong dataList = {newSongList}/> */}
    </Scroll>  
  </div>
}
export default React.memo(Recommend);