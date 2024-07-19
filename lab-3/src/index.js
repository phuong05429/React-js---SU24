import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import thu vien bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


import SeasonDisplay from './lab03/SeasonDisplay';
import SeasonDisplay2 from './lab03/SeasonDisplay2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SeasonDisplay />
    <SeasonDisplay2/>
   
  </React.StrictMode>
);


reportWebVitals();


