import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form } from './Components/index';

function App() {
  const [formState, setFormState] = useState({
    nameInput: '',
    emailInput: '',
    passwordInput: '',
    termsRead: false
  });

  const { nameInput, setNameValid } = useState(true);
  const { emailValid, setEmailValid } = useState(true);
  const { passwordValid, setPasswordValid } = useState(true);

  const firstUpdate = useRef(true);
  const nameRegEx = /^[a-zA-Z\s]*$/
  const emailRegEx = /^[a-zA-Z\s]*$/  //These need to be changed
  const passwordRegEx = /^[a-zA-Z\s]*$/   //These need to be changed

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return
    }
    console.log(nameRegEx.test(formState.nameInput))
  }, [formState.nameInput])

  useEffect(() => {       //These need to be changed
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return
    }
    console.log(nameRegEx.test(formState.nameInput))
  }, [formState.nameInput])

  useEffect(() => {       //These need to be changed
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return
    }
    console.log(nameRegEx.test(formState.nameInput))
  }, [formState.nameInput])




  function formStringChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  };

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
