import { axiosInstance } from "./config";
//登录
export const phoneLogin = (phone,password) => {
  return axiosInstance.get ('/login/cellphone',{
    params :{
      phone : phone,
      password :password
    }
  });
}

//轮播图
export const getBannerRequest = () => {
  return axiosInstance.get ('/banner');
}

//推荐歌单
export const getRecommendSongList = (limit) => {
  limit = limit ? limit : 6;
  return axiosInstance.get (`/personalized`,{
    params : {
      limit :limit
    }
  });
}

//推荐新曲
export const getRecommendNewSong = () => {
  return axiosInstance.get ('/personalized');
}

