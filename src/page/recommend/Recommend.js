import React, { useEffect } from 'react';
import Carousel from '../../components/carousel/Carousel';
import * as actionTypes from './store/actionCreator';
import { useSelector, useDispatch } from 'react-redux'
import BannerIcon from './BannerIcon';
import RecommendSongList from './RecommendSongList';
import style from './style.module.scss';
const Recommend = (props) => {
  const { bannerList, songList } = useSelector(state => state.recommend);
  const dispatch = useDispatch(); 
  const width = window.innerWidth - 10;
  const height = 200;
  const query = `?param=${width}y${height}`
  useEffect (() => {
    dispatch(actionTypes.getBannerList(query))
    dispatch(actionTypes.getSongList())
    // eslint-disable-next-line 
  }, []);
  const dataList = bannerList ? bannerList : [];

  return <div className={style.recommend}>
    <Carousel bgW = {width} bgH = {height} intervalTime={3000} dataList={dataList}/>
    <BannerIcon />
    <RecommendSongList dataList = {songList}/>
    Recommend
  </div>
}
export default React.memo(Recommend);