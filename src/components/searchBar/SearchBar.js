import React, { useState } from 'react';
import style from './searchBar.module.scss';
import icon from '../../icon';
const SearchBar = (props) => {
  const [wordsActive,setWordActive] = useState(false);
  const handleFocus = () => {
    setWordActive(true);
  }
  return <div className = {style.bar}>
    <input type="text" className = {style.input} onFocus={handleFocus}/>
    <span className = {style.inner}>
      <i className = "iconfont" style={{fontSize:"18px"}}>{icon.find}</i>
      <i hidden={wordsActive}>推荐</i>
    </span>
  </div>
}

export default React.memo(SearchBar);