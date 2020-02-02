import React from 'react';
import { renderRoutes } from 'react-router-config';
import style from '../styles/home.module.scss'
const Home = (props) => {
  const { route } = props;
  console.log(route)
  return (
    <div>
      <div className={style.h}>home</div>
      {renderRoutes(route.routes)}
    </div>
  ) 
}

export default React.memo(Home);