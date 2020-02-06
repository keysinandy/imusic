import { actionType } from './actionType';
import { getBannerRequest } from '../../../api/request';
export const changeBannerList = (data) => ({
  type : actionType.CHANGE_BANNER,
  data : data
})
  
export const getBannerList = () => {
  return (dispatch) =>{
    getBannerRequest ().then (data => {
      dispatch (changeBannerList (data.banners.map(v=>v.imageUrl)));
    }).catch ((err) => {
      console.error (err,'banner error');
    }) 
  }
}