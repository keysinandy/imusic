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
  return axiosInstance.get ('/personal_fm',{
    params:{
      timestamp : new Date().getTime()
    }
  });
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

//歌曲详情
export const getSongDetail = (id) => {
  return axiosInstance.get ('/song/detail',{
    params : {
      ids : id
    }
  });
}

//歌单详情
export const getSongListDetail = (id) => {
  return axiosInstance.get ('/playlist/detail',{
    params : {
      id : id
    }
  });
}
//收藏、取消收藏歌单 type : 1 收藏  2 取消收藏
export const subscribeSongList = (type,id) => {
  return axiosInstance.get ('/playlist/subscribe',{
    params : {
      t : type,
      id : id
    }
  });
}

//喜欢、不喜欢歌曲
export const likeSong = (id,like = true) => {
  return axiosInstance.get ('/like',{
    params : {
      id : id,
      like : like
    }
  });
}

export const likeList = (uid) => {
  return axiosInstance.get ('/likeList',{
    params : {
      uid : uid,
    }
  });
}

export const userDetail = (uid) => {
  return axiosInstance.get ('/user/detail',{
    params : {
      uid : uid,
    }
  });
}
export const fmTrash = (id) => {
  return axiosInstance.get ('/fm_trash',{
    params : {
      id : id,
    }
  });
}
