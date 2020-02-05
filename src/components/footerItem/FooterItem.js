import React from 'react';
import style from './footerItem.module.scss';
const FooterItem = (props) => {
  const { iconNumber, iconText } = props;
  return ( <div className={style.item}>
    <i className="iconfont">{iconNumber}</i>
    <div>{iconText}</div>
  </div> )
}

export default React.memo(FooterItem);