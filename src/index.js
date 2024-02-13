import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Momo from './Momo.js'
import App from './App.js'
import Chatni from './Chatni.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Momo/>
    <Chatni/>
    <App/>
    
  </React.StrictMode>
);


reportWebVitals();
