import React from 'react';
import './components.css'

const Form = props => {
    return (
        <div>
            <form className='formMainDiv'>
                <label for='nameInput'>
                    <input type='text' placeholder='Name' name='nameInput' id='nameInput' />
                </label>
                <label for='emailInput'>
                    <input type='text' placeholder='Email' name='emailInput' id='emailInput' />
                </label>
                <label for='passwordInput'>
                    <input type='text' placeholder='Password' name='passwordInput' id='passwordInput' />
                </label>
                <label for='termsInput'>
                    <input type='checkbox' name='termsInput' id='termInput' /> Terms of Services
                </label>
                <label>
                    <input type='submit' />
                </label>


            </form>


        </div>
    )
}

export default Form;