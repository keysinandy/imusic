import React from 'react';
import { useHistory } from 'react-router-dom';
import icon from '../../icon';
import style from './rank.module.scss';
import Scroll from '../../components/scroll/Scroll';
import TabList from '../../components/tabList/TabList';
const Rank = () => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack()
  } 
  const tagList = [];
  const handleTabClick = () => {};
  return (
    <div>
      <div className={style.header}>
        <button onClick={handleBack} className={style.back}>
          <i className="iconfont">{icon.left}</i>
        </button>
        <h1 className={style.title}>排行榜</h1>
      </div>
      <TabList item={tagList} clickCb={handleTabClick}/>
    </div>
  )

}

export default Rank;