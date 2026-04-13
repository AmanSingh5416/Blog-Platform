const pass_warning = document.querySelector('#pass_warning');
const email_warning = document.querySelector('#email_warning');

export async function handleSubmit(e) {
    e.preventDefault();
    pass_warning.style.display = 'none';
    email_warning.style.display = 'none';

    try{
        const data = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: e.target[0].value,
                password: e.target[1].value
            })
        });
        const res = await data.json();
        if (res.user) {
            pass_warning.textContent = res.msg;
            pass_warning.style.display = 'block'
        }else if (!(res.user)){
            email_warning.textContent = res.msg;
            email_warning.style.display = 'block'
        }
    }catch(err) {console.log(err)}

    e.target[0].value = "";
    e.target[1].value = "";
}