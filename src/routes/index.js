import React from 'react';
import { Redirect } from "react-router-dom";
import Home from '../page/Home';
import Recommend from '../page/Recommend';
import Singers from '../page/Singers';
import Rank from '../page/Rank';

export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/recommend"}/>
        )
      },
      {
        path: "/recommend",
        component: Recommend
      },
      {
        path: "/singers",
        component: Singers
      },
      {
        path: "/rank",
        component: Rank
      }
    ]
  }
]