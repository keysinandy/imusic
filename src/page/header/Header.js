import React from 'react';
import icon from '../../icon';
import SearchBar from '../../components/searchBar/SearchBar';
import style from './header.module.scss'
const Header = (props) => {
  return (
  <div className = {style.header}>
    <button> <i className="iconfont">{icon.rank}</i> </button>
    <SearchBar />
    <button> <i className="iconfont">{icon.listen}</i> </button>
  </div>
  )
}

export default React.memo(Header);