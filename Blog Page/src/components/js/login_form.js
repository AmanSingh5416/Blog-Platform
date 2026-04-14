// You cannot use querySelectors in React, there is no guarantee that the DOM is fully complete. That is why, the value can be null anytime.
// And this leads to the error: login_form.js:6 Uncaught (in promise) TypeError: Cannot read properties of null (reading 'style')
// Because you try to access style property of a null object.

// const pass_warning = document.querySelector('#pass_warning');
// const email_warning = document.querySelector('#email_warning');

// import {useNavigate} from 'react-router-dom';

export async function handleSubmit(emailData, passData, emailWarn, passWarn, navigate) {

    // const navigate = useNavigate();
    // useNavigate is a hook, and hooks cannot be called inside regular functions (only inside React components or custom hooks).

    // pass_warning.style.display = 'none';
    // email_warning.style.display = 'none';
    passWarn.current.style.display = 'none';
    emailWarn.current.style.display = 'none';

    try{
        const data = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                // email: e.target[0].value,
                // password: e.target[1].value
                email: emailData.current.value,
                password: passData.current.value
            })
        });
        // When your Express server crashes or can't find a route, it often sends back a default HTML "404 Not Found" or"500 Internal Server
        // Error" page. Your React code tries to run response.json(), sees the <!DOCTYPE html> at the start of that error page, and freaks out.
        // 404 (Page Not Found) error, when the specified path does not exist in the server, is a valid HTTP response & so it will not trigger
        // the catch block and data.json() can crash. So, I need to handle that too.
        // if (!data) throw new Error ('Data not found.');
        if (!data.ok) throw new Error ('Data not found.'); // data.ok works better.
        const res = await data.json();
        if (res.user && !(res._id)) {
            // pass_warning.textContent = res.msg;
            // pass_warning.style.display = 'block'
            passWarn.current.textContent = res.msg;
            passWarn.current.style.display = 'block'
        }else if (!(res.user)){
            // email_warning.textContent = res.msg;
            // email_warning.style.display = 'block'
            emailWarn.current.textContent = res.msg;
            emailWarn.current.style.display = 'block'
        }else {
            navigate('/blogs');
        }
    }catch(err) {console.log(err)}

    // e.target[0].value = "";
    // e.target[1].value = "";
    emailData.current.value = "";
    passData.current.value = "";
}