import React from 'react';
import Recommend from '../page/recommend/Recommend';
import Me from '../page/me/me';
import Account from '../page/account/account';
import { Redirect } from 'react-router-dom';

export default [
  {
    path : '/',
    exact :true,
    render : () => {
      return <Redirect to='/recommend' />
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
]