import React, { useState } from 'react';
import './components.css'

const Form = props => {
    const { formStringChange, formCheckboxChange } = props;
    const { nameValid, setNameValid } = useState(true);
    const { emailValid, setEmailValid } = useState(true);
    const { passwordValid, setPasswordValid } = useState(true);


    return (
        <div>
            <form className='formMainDiv'>
                <label for='nameInput'>
                    <input onChange={formStringChange} type='text' placeholder='Name' name='nameInput' id='nameInput' />
                </label>
                <label for='emailInput'>
                    <input onChange={formStringChange} type='text' placeholder='Email' name='emailInput' id='emailInput' />
                </label>
                <label for='passwordInput'>
                    <input onChange={formStringChange} type='text' placeholder='Password' name='passwordInput' id='passwordInput' />
                </label>
                <label for='termsInput'>
                    <input onChange={formCheckboxChange} type='checkbox' name='termsInput' id='termInput' /> Terms of Services
                </label>
                <label>
                    <input type='submit' />
                </label>


            </form>


        </div>
    )
}

export default Form;