// src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './lab03/SeasonDisplay'
import SeasonDisplay2 from './lab03/SeasonDisplay2';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { lat, errorMessage } = SeasonDisplay();

  const renderContent = () => {
    if (errorMessage) {
      return <div>Error: {errorMessage}</div>;
    } 
    if (lat) {
      return <SeasonDisplay2 lat={lat} />;
    } 
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };

  return <div className="App">{renderContent()}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
