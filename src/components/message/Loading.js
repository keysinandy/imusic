import React from 'react';
import propTypes from 'prop-types';
import style from './message.module.scss';
const Loading = (props) => {
  const { showFlag, icon } = props;
  return (
  <div className={style.bg} hidden={!showFlag}>
    <div className={style.loading}>
      <span className={style.spinIcon}>
        <i className="iconfont">{icon}</i> 
      </span>
    </div>
  </div>)
}

Loading.propTypes = {
  showFlag : propTypes.bool,
}
Loading.defaultProps = {
  showFlag : false,
}


export default Loading;