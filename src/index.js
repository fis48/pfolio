import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import mainStore from './store/main-store';
import Home from './screens/Home';
import Section from './screens/Section';

const mainState = mainStore.getState();

// console.log(mainState.sections);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/web-development' element={<Section/>}></Route>
          <Route path='/web-sites' element={<Section/>}></Route>
        </Routes>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


