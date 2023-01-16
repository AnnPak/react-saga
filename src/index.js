import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { createBrowserHistory } from '@remix-run/router';
import Home from './pages/home/home';
import LatestNews from './pages/latest-news/latest-news';
import PopularNews from './pages/popular-news/popular-news';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={history}>
        <App>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/latest-news' element={<LatestNews />}/>
            <Route path='/popular-news' element={<PopularNews />}/>
          </Routes>
        </App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
