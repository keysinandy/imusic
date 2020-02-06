import React, { useEffect } from 'react';
import Carousel from '../../components/carousel/Carousel';
import * as actionTypes from './store/actionCreator';
import { connect } from 'react-redux'
const Recommend = (props) => {
  const { bannerImgList } = props;
  const { getBannerDataDispatch } = props;
  useEffect (() => {
    getBannerDataDispatch ();
  }, []);

  const imgList = bannerImgList ? bannerImgList : [];
  console.log(imgList,bannerImgList)
  return <div>
    <Carousel bgW = {300} bgH = {200} intervalTime={3000} imgList={imgList}/>
    Recommend
  </div>
} 
const mapStateToProps = (state) => ({
  bannerList: state.bannerList,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch () {
      dispatch (actionTypes.getBannerList());
    }
  }
};
export default connect (mapStateToProps, mapDispatchToProps)(React.memo(Recommend));;