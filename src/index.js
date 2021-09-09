import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';

import ThemeProvider from './components/ThemeProvider/ThemeProvider';

ReactDOM.render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
