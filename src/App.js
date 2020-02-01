import React from 'react';
import { renderRoutes } from 'react-router-config';
import route from './routes/index.js';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      {renderRoutes(route)}
    </HashRouter>
  );
}

export default App;
