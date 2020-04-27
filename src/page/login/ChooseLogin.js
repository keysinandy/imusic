import React, { useState, useEffect } from 'react';
import icon from '../../icon';
import style from './login.module.scss';
import { checkLogin, reFreshLogin } from '../../api/request';
import * as meAction from '../me/store/actionCreator';
import { useDispatch } from 'react-redux';

const ChooseLogin = (props) => {
  const [enterFlag,setEnterFlag] = useState('none');
  const { history } = props;
  const dispatch = useDispatch();
  //直接进入
  const handleEnter = () => {
    history.push('/recommend/index');
  }
  useEffect(()=>{
    checkLogin().then(res=>{
      if (res && res.code === 200) {
        //已登录
        reFreshLogin();
        dispatch(meAction.initMe(res.profile.userId));
        history.push('/recommend/index');
      } else {
        setEnterFlag('block');
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handlePhoneLogin = () =>{
    history.push('/login/phoneLogin');
  }
  return <div className={style.bg}>
    <i className={`iconfont ${style.icon}`}>{icon.musicIcon}</i>
    <button className={style.positive} onClick={handlePhoneLogin} style={{display:enterFlag}}>手机号登录</button>
    <button className={style.negative} onClick={handleEnter} style={{display:enterFlag}}>立刻体验</button>
  </div>
}

export default React.memo(ChooseLogin);