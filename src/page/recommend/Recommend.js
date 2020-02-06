import React, { useEffect } from 'react';
import Carousel from '../../components/carousel/Carousel';
import * as actionTypes from './store/actionCreator';
import { useSelector, useDispatch } from 'react-redux'

const Recommend = (props) => {
  const bannerList = useSelector(state => state.recommend.bannerList);
  const dispatch = useDispatch(); 
  useEffect (() => {
    dispatch(actionTypes.getBannerList())
    // eslint-disable-next-line 
  }, []);
  const imgList = bannerList ? bannerList : [];
  const width = window.innerWidth - 10;
  return <div>
    <Carousel bgW = {width} bgH = {200} intervalTime={3000} imgList={imgList}/>
    Recommend
  </div>
}
export default React.memo(Recommend);