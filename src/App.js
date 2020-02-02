import React from 'react';
import { renderRoutes } from 'react-router-config';
import route from './routes/index.js';
import { HashRouter } from 'react-router-dom';
import './App.scss'

function App() {
  return (
    <div className="App">
      <HashRouter>
        {renderRoutes(route)}
      </HashRouter>
    </div>
  );
}

export default App;
