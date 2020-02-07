import React, { useEffect } from 'react';
import Carousel from '../../components/carousel/Carousel';
import * as actionTypes from './store/actionCreator';
import { useSelector, useDispatch } from 'react-redux'
import BannerIcon from './BannerIcon';
const Recommend = (props) => {
  const bannerList = useSelector(state => state.recommend.bannerList);
  const dispatch = useDispatch(); 
  const width = window.innerWidth - 10;
  const height = 200;
  const query = `?param=${width}y${height}`
  useEffect (() => {
    dispatch(actionTypes.getBannerList(query))
    // eslint-disable-next-line 
  }, []);
  const imgList = bannerList ? bannerList : [];

  return <div>
    <Carousel bgW = {width} bgH = {height} intervalTime={3000} imgList={imgList}/>
    <BannerIcon />
    Recommend
  </div>
}
export default React.memo(Recommend);