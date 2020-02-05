import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import {getBannerRequest} from '../../api/request';
const Recommend = () => {
  getBannerRequest().then(res=>{
    console.log(res)
  })
  return <div>
    {/* <Carousel bgW = {300} bgH = {200} intervalTime={3000}/> */}
    Recommend
    
  </div>
} 

export default React.memo(Recommend);