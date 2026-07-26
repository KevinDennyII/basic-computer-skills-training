import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { ProgressProvider } from './lib/ProgressContext';
import './styles/global.css';

const container = document.querySelector('#root');
if (!container) throw new Error('Root element missing from index.html');

createRoot(container).render(
  <StrictMode>
    {/* Hash routing so the course also works from a plain file server or USB stick. */}
    <HashRouter>
      <ProgressProvider>
        <App />
      </ProgressProvider>
    </HashRouter>
  </StrictMode>,
);
