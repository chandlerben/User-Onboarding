import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form } from './Components/index';

function App() {
  const [formState, setFormState] = useState({
    nameInput: '',
    emailInput: '',
    passwordInput: '',
    termsRead: false
  })

  function formStringChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }

  function formCheckboxChange(event) {
    setFormState(
      {
        ...formState,
        termsRead: event.target.checked
      }
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <Form formStringChange={formStringChange} formCheckboxChange={formCheckboxChange} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
