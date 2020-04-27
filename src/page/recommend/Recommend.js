import React from 'react';
import { renderRoutes } from 'react-router-config';
const Recommend = (props) => {
  console.log(props)
  const { routes }= props.route
  return <div>
    {renderRoutes(routes)}
  </div>
}
export default React.memo(Recommend);