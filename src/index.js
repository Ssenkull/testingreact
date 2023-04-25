import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
    </Helmet>
   
    <App />
    </>
  </React.StrictMode>
);
