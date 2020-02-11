import React, { useState, useEffect } from 'react';
import icon from '../../icon';
import style from './login.module.scss';
import { checkLogin } from '../../api/request'

const ChooseLogin = (props) => {
  const [enterFlag,setEnterFlag] = useState(true);
  const { history } = props;
  //直接进入
  const handleEnter = () => {
    history.push('/recommend');
  }
  useEffect(()=>{
    checkLogin().then(res=>{
      if (res.code === 200) {
        //已登录
        history.push('/recommend');
      } else {
        setEnterFlag(false);
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handlePhoneLogin = () =>{
    history.push('/login/phoneLogin');
  }
  return <div className={style.bg}>
    <i className={`iconfont ${style.icon}`}>{icon.musicIcon}</i>
    <button className={style.positive} onClick={handlePhoneLogin} hidden={enterFlag}>手机号登录</button>
    <button className={style.negative} onClick={handleEnter} hidden={enterFlag}>立刻体验</button>
  </div>
}

export default React.memo(ChooseLogin);