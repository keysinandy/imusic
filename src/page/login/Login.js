import React from 'react';
import { renderRoutes } from "react-router-config";

const Login = (props) => {
  const { route } = props;
  return <div>
    {renderRoutes(route.routes)}
  </div>
}

export default React.memo(Login);