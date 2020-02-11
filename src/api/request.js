import { axiosInstance } from "./config";
//登录
export const phoneLogin = (phone,password) => {
  return axiosInstance.post ('/login/cellphone',{
    phone : phone,
    password :password
  });
}
//验证登录
export const checkLogin = () =>{
  return axiosInstance.get ('/login/status');

}
//刷新登录
export const reFreshLogin = () =>{
  return axiosInstance.get ('/login/refresh');

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

//私人fm
export const getPersonalFm = () => {
  return axiosInstance.get ('/personal_fm');
}
