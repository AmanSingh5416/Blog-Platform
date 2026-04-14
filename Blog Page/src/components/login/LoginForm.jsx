import '../css/login_form.css';
import {useRef} from 'react';

import {handleSubmit} from '../js/login_form.js';
// In React, for an import to work with curly braces { handleSubmit }, you must have a Named Export (not a Default Export).

import {useNavigate} from 'react-router-dom';

export default function LoginForm() {
    const emailData = useRef('');
    const passData = useRef('');
    const emailWarn = useRef('');
    const passWarn = useRef('');
    const navigate = useNavigate();
    return (
        <div className='login_parent'>
            <form className='login_form' onSubmit={(e) => {e.preventDefault(); handleSubmit(emailData, passData, emailWarn, passWarn, navigate);}}>
                <label htmlFor="email">Enter your email here: </label>
                <input type="email" placeholder='Enter your email' id='email' name='email' ref={emailData}/><br />
                <p id='email_warning' ref={emailWarn}></p>
                <label htmlFor="password">Enter your password here: </label>
                <input type="password" placeholder='Enter your password' id='password' name='password' ref={passData}/><br />
                <p id='pass_warning' ref={passWarn}></p>
                <hr style={{border: '0.01rem solid grey', width: '50%'}}></hr>
                <button>Submit</button>
            </form>
        </div>
    );
}