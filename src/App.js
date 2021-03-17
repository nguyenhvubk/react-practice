import logo from './logo.svg';
import './App.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Parent from './components/Parent'
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Parent />
    </div>
  );
}

export default App;
