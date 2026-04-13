import '../css/login_form.css';
import {handleSubmit} from '../js/login_form.js';
export default function LoginForm() {
    return (
        <div className='login_parent'>
            <form className='login_form' onSubmit={handleSubmit}>
                <label htmlFor="email">Enter your email here: </label>
                <input type="email" placeholder='Enter your email' id='email' name='email'/><br />
                <p id='email_warning'></p>
                <label htmlFor="password">Enter your password here: </label>
                <input type="password" placeholder='Enter your password' id='password' name='password'/><br />
                <p id='pass_warning'></p>
                <hr style={{border: '0.01rem solid grey', width: '50%'}}></hr>
                <button>Submit</button>
            </form>
        </div>
    );
}