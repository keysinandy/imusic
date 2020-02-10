import React, { useRef, useState } from 'react';
import icon from '../../icon';
import style from './login.module.scss';
import { useDispatch } from 'react-redux';
import { phoneLogin } from '../../api/request';
import * as actionTypes from '../myMessage/store/actionCreator';

const PhoneLogin = (props) => {
  const { history } = props;
  const [active, setActive] = useState(false);
  const input = useRef();
  const password = useRef();
  const dispatch = useDispatch()
  const handleInputChange = (e) => {
    if (input.current.value.length > 0 && password.current.value.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  const handleNext = () => {
    let value = input.current.value;
    let passwordValue = password.current.value;
    if (value.length > 0) {
      if(/^1[3456789]\d{9}$/.test(value)){ 
        phoneLogin(value,passwordValue).then(data=>{
          console.log(data)
        })
      } else {
        const data = {
          content : '手机号码格式不正确!',
        }
        dispatch(actionTypes.showMessage(data))
      }
    }
  }
  return <div className={style.phoneLoginBg}>
    <i className={`iconfont ${style.backIcon}`}>{icon.left}</i>
    <h1 className = {style.title}>
      手机号登录
    </h1>
    <div className={style.group}>
      <div className={style.inputGroup}>
        <i>+86</i>
        <input type="text" placeholder="输入手机号" ref={input} onChange = {handleInputChange}/>
      </div>
      <div className={style.inputGroup}>
        <i>密码:</i>
        <input type="password" ref={password} placeholder="输入密码" onChange = {handleInputChange}/>
      </div>
      <button className={style.reset}>重设密码</button>
    </div>
    <button className={active ? style.nextActive : style.next} onClick = {handleNext}>下一步</button>
  </div>
}

export default React.memo(PhoneLogin);