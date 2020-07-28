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

  const [formValidState, setFormValidState] = useState({
    nameValid: true,
    emailValid: true,
    passwordValid: true,
    termsReadValid: false
  });


  const firstUpdate = useRef(true);
  const secondUpdate = useRef(true);
  const thirdUpdate = useRef(true);
  const nameRegEx = /^[a-zA-Z]+([ a-zA-Z]+)*$/
  const emailRegEx = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/
  const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d!@#$%^&*]{8,}$/

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return
    }
    setFormValidState({
      ...formValidState,
      nameValid: nameRegEx.test(formState.nameInput),
    });
  }, [formState.nameInput])

  useEffect(() => {
    if (secondUpdate.current) {
      secondUpdate.current = false;
      return
    }
    setFormValidState({
      ...formValidState,
      emailValid: emailRegEx.test(formState.emailInput),
    })
  }, [formState.emailInput])

  useEffect(() => {       //These need to be changed
    if (thirdUpdate.current) {
      thirdUpdate.current = false;
      return
    }
    setFormValidState({
      ...formValidState,
      passwordValid: passwordRegEx.test(formState.passwordInput),
    })
  }, [formState.passwordInput])




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
    console.log(formState)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Form formStringChange={formStringChange} formCheckboxChange={formCheckboxChange} formValidState={formValidState} formState={formState} />
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
