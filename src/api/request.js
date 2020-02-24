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

//每日推荐
export const getDailyRecommend = () => {
  return axiosInstance.get ('/recommend/songs');
}

//获取歌词
export const getLyric = (id) => {
  return axiosInstance.get ('/lyric',{
    params : {
      id : id
    }
  });
}
//获取音乐url 获取到音乐的 id 后，将 https://music.163.com/song/media/outer/url?id=id.mp3 以 src 赋予 Audio 即可播放
export const getSongUrl = (id) => {
  return axiosInstance.get ('/song/url',{
    params : {
      id : id
    }
  });
}
