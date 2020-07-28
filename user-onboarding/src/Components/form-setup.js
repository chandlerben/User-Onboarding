import React from 'react';
import './components.css'

const Form = props => {
    const { formStringChange, formCheckboxChange, formValidState } = props;




    return (
        <div>
            <form className='formMainDiv'>
                <label for='nameInput'>
                    <input onChange={formStringChange} type='text' placeholder='Name' name='nameInput' id='nameInput' />
                </label>
                <h2 className="formInvalid hidden">{formValidState.nameValid ? ' ' : 'Name can only include letters'}</h2>
                <label for='emailInput'>
                    <input onChange={formStringChange} type='text' placeholder='Email' name='emailInput' id='emailInput' />
                </label>
                <h2 className="formInvalid hidden">{formValidState.emailValid ? ' ' : 'Please enter valid email.'}</h2>
                <label for='passwordInput'>
                    <input onChange={formStringChange} type='text' placeholder='Password' name='passwordInput' id='passwordInput' />
                </label>
                <h2 className="formInvalid hidden">{formValidState.passwordValid ? ' ' : 'Min 8 char, 1 digit, 1 lower, 1 upper, 1 special character'}</h2>
                <label for='termsInput'>
                    <input onChange={formCheckboxChange} type='checkbox' name='termsInput' id='termInput' /> Terms of Services
                </label>
                <h2 className="formInvalid hidden">This is where the terms warning will go </h2>
                <label>
                    <input type='submit' />
                </label>


            </form>


        </div>
    )
}

export default Form;