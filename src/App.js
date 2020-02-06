import React from 'react';
import { renderRoutes } from 'react-router-config';
import route from './routes/index.js';
import { HashRouter } from 'react-router-dom';
import Header from './page/header/Header';
import Footer from './page/footer/Footer';
import {Provider} from 'react-redux';
import store from './store/store';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HashRouter>
          <Header />
          <div>
            {renderRoutes(route)}
          </div>
          <Footer />
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
