import React from 'react';
import icon from '../../icon';
import style from './login.module.scss';

const ChooseLogin = (props) => {
  const { history } = props;
  //直接进入
  const handleEnter = () => {
    history.push('/recommend');
  }

  const handlePhoneLogin = () =>{
    history.push('/login/phoneLogin');
  }
  return <div className={style.bg}>
    <i className={`iconfont ${style.icon}`}>{icon.musicIcon}</i>
    <button className={style.positive} onClick={handlePhoneLogin}>手机号登录</button>
    <button className={style.negative} onClick={handleEnter}>立刻体验</button>
  </div>
}

export default React.memo(ChooseLogin);