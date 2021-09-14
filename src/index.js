import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import Main from './Pages/MainPage/Main';
import ContextProvider from './components/ContextProvider/Provider';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://d6c87674e1a2471f84b1ad4e4a90d1a5@o511500.ingest.sentry.io/5959678',
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Main />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
