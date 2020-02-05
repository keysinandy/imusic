import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.scss';
import FooterItem from '../../components/footerItem/FooterItem';
import icon from '../../icon';
const Footer = () => {
  return (
    <div className={style.footer}>
      <NavLink exact to="/recommend" activeClassName={style.active} className={style.noActive}>
        <FooterItem iconNumber={icon.find} iconText='推荐'/>
      </NavLink>
      <NavLink to="/me" activeClassName={style.active} className={style.noActive}>
        <FooterItem iconNumber={icon.me} iconText='我的'/>
      </NavLink>
      <NavLink to="/account" activeClassName={style.active} className={style.noActive}>
        <FooterItem iconNumber={icon.account} iconText='账号'/>
      </NavLink>
    </div>
  )
}
export default Footer