import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

// App renders <Switch> and <NavLink>, so it needs the same Router that
// index.js wraps it in - rendering it bare throws an invariant error.
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
