import React from 'react';
import icon from '../../icon';
import SearchBar from '../../components/searchBar/SearchBar';
import style from './header.module.scss';
import { useDispatch } from 'react-redux';
import * as playerAction from '../../page/player/store/actionCreator';
const Header = (props) => {
  const dispatch = useDispatch();
  const handleListenClick = () => {
    dispatch(playerAction.showPlayer())
  }
  return (
  <div className = {style.header}>
    <button> <i className="iconfont">{icon.rank}</i> </button>
    <SearchBar />
    <button onClick={handleListenClick}> <i className="iconfont">{icon.listen}</i> </button>
  </div>
  )
}

export default React.memo(Header);