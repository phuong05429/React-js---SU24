
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const useEmailState = () => {
  const [email, setEmail] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedEmail(email);
    setCurrentTime(getTime());
  };

  const getTime = () => {
    return new Date().toLocaleTimeString();
  };

  return {
    email,
    submittedEmail,
    currentTime,
    handleChange,
    handleSubmit
  };
};

function App({ email, submittedEmail, currentTime, handleChange, handleSubmit }) {
  return (
    <div className="App">
      <div className="container">
        <form className='form-control' onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="text" className="form-control" placeholder="Vui long nhap..." 
              value={email} 
              onChange={handleChange} 
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {submittedEmail && (
          <div>
            <h1>{submittedEmail}</h1>
            <h2>{currentTime}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AppContainer() {
  const emailState = useEmailState();
  return <App {...emailState} />;
}
