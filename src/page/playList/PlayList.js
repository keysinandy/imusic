import React from 'react';
import icon from '../../icon';
import { useDispatch, useSelector, useStore } from 'react-redux';
import * as playerAction from '../player/store/actionCreator';
const PlayList = (props) => {
  const { history } = props;
  const store = useStore();
  const dispatch = useDispatch();
  const handleBack = () => {
    history.push('/recommend/index');
  }
  const handleListenClick = () => {
    if(store.getState().player.songList.length > 0) {
      dispatch(playerAction.showPlayer())
    }
  }
  return <div>
    <header>
      <button onClick={handleBack}>
        <i className="iconfont">{icon.left}</i>
      </button>
      <h1>歌单广场</h1>
      <button onClick={handleListenClick}> <i className="iconfont">{icon.listen}</i> </button>
    </header>
  </div>
}

export default React.memo(PlayList)