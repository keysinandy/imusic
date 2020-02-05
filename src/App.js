import React from 'react';
import { renderRoutes } from 'react-router-config';
import route from './routes/index.js';
import { HashRouter } from 'react-router-dom';
import Header from './page/header/Header';
import Footer from './page/footer/Footer';
import './App.css'

function App() {
  return (
    // Provider
    <div className="App">
      <HashRouter>
        <Header />
        <div>
          {renderRoutes(route)}
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
