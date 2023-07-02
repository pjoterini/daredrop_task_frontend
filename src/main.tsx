import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { StreamersContextProvider } from './context/StreamersContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StreamersContextProvider>
      <App />
    </StreamersContextProvider>
  </React.StrictMode>,
);
