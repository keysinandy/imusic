import React, { useState, useEffect, useCallback } from 'react';
import propTypes from 'prop-types';
import style from './message.module.scss';
const Message = (props) => {
  const { duration, content,onShow ,onClose, modifyFlag } = props;
  const [isHidden, setIsHidden] = useState(true);
  
  const show = () => {
    setIsHidden(false);
    if (typeof onShow === 'function') {
      onShow();
    }
  }

  const close = useCallback(() => { 
    setIsHidden(true);
    if (typeof onClose === 'function') {
      onClose();
    }
  },[onClose]) 

  useEffect(()=>{
    if (content.length > 0) {
      show()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[modifyFlag])
  
  //自动关闭
  useEffect(()=> {
    if (isHidden === false && duration > 0 && typeof close === 'function') {
      setTimeout(() => {
        close();
      },duration);
    }
  },[isHidden, duration, close])

  return (
  <div className={style.bg} hidden={isHidden}>
    <div className={style.message}>
      <span className={style.content}>{content}</span>
    </div>
  </div>)
}

Message.propTypes = {
  duration : propTypes.number,//持续时间
  content : propTypes.string,//内容
  onShow : propTypes.func,
  onClose : propTypes.func,
  modifyFlag : propTypes.bool,
}
Message.defaultProps = {
  duration : 1500,
  content : "",
  onShow : () => {},
  onClose : () => {},
  modifyFlag : true,
}


export default Message;