import React from 'react';
import propTypes from 'prop-types'
import Scroll from '../scroll/Scroll';
import style from './tabList.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
const TabList = (props) =>{
  const { item, clickCb } = props;
  const [activeIndex,setActiveIndex] = useState(0);
  const handleActive = (index,force = false) =>{
    if (index === activeIndex && force === false) {
      return;
    }
    setActiveIndex(index);
    clickCb(item[index]);
  }

  useEffect(()=>{
    handleActive(activeIndex,true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[item])

  return <Scroll direction="horizontal" outerStyle = {{width:'100vw',whiteSpace: 'nowrap',overflow:'hidden'}}>
    <nav className={style.nav}>
      {item.map((v,i)=>{
        return <button key={v.id}  onClick={()=>handleActive(i)} className={`${style.item} ${activeIndex === i ? style.active :''}`} >{v.name}</button>
      })}
    </nav>
  </Scroll>
}

TabList.propTypes = {
  item : propTypes.array,
  clickCb :propTypes.func
}
TabList.defaultProps = {
  item :[],
  clickCb : ()=>{}
}
export default TabList