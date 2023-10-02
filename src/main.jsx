import React from 'react';
import ReactDOM from 'react-dom/client';
import ResultsSummary from './ResultsSummary.jsx';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='md:grid md:place-items-center md:min-h-screen'>
      <ResultsSummary />
    </div>
  </React.StrictMode>
);
