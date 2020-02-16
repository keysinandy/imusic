import React from 'react';
import Recommend from '../page/recommend/Recommend';
import Me from '../page/me/me';
import Account from '../page/account/account';
import Login from '../page/login/Login';
import PhoneLogin from '../page/login/PhoneLogin';
import ChooseLogin from '../page/login/ChooseLogin';
import SongList from '../page/songList/songList';
import { Redirect } from 'react-router-dom';

export default [
  {
    path : '/',
    exact : true,
    render : () => {
      return <Redirect to='/login' />
    }
  },
  {
    path : '/recommend',
    component : Recommend,
  },
  {
    path : '/me',
    component : Me,
  },
  {
    path : '/account',
    component : Account,
  },
  {
    path : '/songList',
    component : SongList,
  },
  {
    path : '/login',
    component : Login,
    routes : [
      {
        path: "/login",
        exact: true,
        render: () => (
          <Redirect to={"/login/chooseLogin"}/>
        )
      },
      {
        path : '/login/chooseLogin',
        component : ChooseLogin,
      },
      {
        path : '/login/phoneLogin',
        component : PhoneLogin,
      }
    ]
  },
]