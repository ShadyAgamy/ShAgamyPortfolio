import { it } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import App from './App';

// App renders <Switch> and <NavLink>, so it needs the same Router that
// main.jsx wraps it in - rendering it bare throws an invariant error.
it('renders without crashing', () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  cleanup();
});
