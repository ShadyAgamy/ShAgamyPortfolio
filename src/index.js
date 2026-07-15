import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
    <HashRouter>
        <ScrollToTop />
        <App />
    </HashRouter>,
  document.getElementById('root')
);
