import React from 'react';
import { renderRoutes } from 'react-router-config';
import route from './routes/index.js';
import { HashRouter } from 'react-router-dom';
import Footer from './page/footer/Footer';
import {Provider} from 'react-redux';
import store from './store/store';
import MyMessage from './page/myMessage/MyMessage';
import MyLoading from './page/myMessage/MyLoading';
import MusicPlayer from './page/player/MusicPlayer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HashRouter>
          <MyMessage />
          <MyLoading />
          <MusicPlayer />
          <div>
            {renderRoutes(route)}
            <Footer />
          </div>
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
