//context is global shared

const ctx = {
    "accounts": [
        {
            "name": "jake",
            "email": "developer@jakedigby.com",
            "balance": 1000000000,
            "password": "notsecret"
        }
    ]
}

function create(){
    const name     = document.getElementById('name');
    const email    = document.getElementById('email');
    const password = document.getElementById('password');
    const status   = document.getElementById('createStatus');
    ctx.accounts.push({
        name:     name.value,
        email:    email.value,
        password: password.value,
        balance:  0,
    });
    // update status & clear form
    name.value = '';
    email.value = '';
    password.value = '';
    status.innerHTML = 'Success! Account Created!';
}

function allData(){
    const status = document.getElementById('allDataStatus');
    status.innerHTML = JSON.stringify(ctx.accounts);
}