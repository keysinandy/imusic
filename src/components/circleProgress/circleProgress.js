import React from 'react';
import style from './circleProgress.module.scss';
const CircleProgress = (props) => {
  const {children,progress, radius, isVisible} = props;
  let barProgress = Math.min(1,Math.max(0,progress)) || 0;
  const bgColor = 'rgba(20, 20, 20, 0.95)';
  const progressColor = 'rgb(255, 164, 0)'
  //进度条宽度的倍率
  const progressWidthRatio = 0.1;
  let bgRadius = radius + 'px';
  let innerRadius = (1-progressWidthRatio) * radius + 'px';

  let circleBgStyle = {
    width:bgRadius,
    height:bgRadius,
    backgroundColor : progressColor
  }


  let circleLeftStyle = {
    width : bgRadius,
    height : bgRadius,
    backgroundImage : `linear-gradient(to right, ${bgColor} 50% ,#0000 0%)`,
    transformOrigin : '100 50',
    transform :`rotate(${barProgress > 0.5 ? (barProgress - 0.5) * 360 : 0}deg)`
  }
  let circleRightStyle = {
    position: 'relative',
    top : '-' + bgRadius,
    // left : bgRadius,
    width : bgRadius,
    height : bgRadius,
    backgroundImage : `linear-gradient(to right, #0000 50% , ${barProgress <= 0.5 ? bgColor : progressColor} 0%)`,
    transformOrigin : '0 50',
    transform :`rotate(${barProgress <= 0.5 ? barProgress * 360 : 0}deg)`
  }

  let circleInnerStyle = {
    position: 'relative',
    width:innerRadius,
    height:innerRadius,
    top : -(2 - 0.5 * progressWidthRatio) * radius + 'px',
    left : 0.5 * progressWidthRatio * radius + 'px',
  }
  return <div className={style.circleBg} style={circleBgStyle} hidden={!isVisible}>
    <div className={style.halfGroup}>
      <div className={style.circleLeft} style={circleLeftStyle}></div>
      <div className={style.circleRight} style={circleRightStyle}></div>
    </div>
    <div className={style.circleInner} style={circleInnerStyle}>
      {children}
    </div>
  </div>
}

export default CircleProgress