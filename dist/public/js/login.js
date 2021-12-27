
let form = document.getElementsByTagName('form');
let login_instead_btn = document.querySelector('.login-instead-btn');
let sign_up = document.querySelector('.sign-up');
let cancelbtn = document.getElementsByClassName('cancelbtn');
let error_msg = document.getElementsByClassName('error-msg');
let spinner = document.querySelectorAll('.login-msg .fa-spinner');
// let login_modal = document.querySelector('.login-container'); LOGIN MODAL ALREADY DECLARED IN TOP.JS

sign_up.addEventListener('click', () => {
    form[0].style.animation = 'login_fade_out 1.5s ease-in-out';
    form[1].style.animation = 'login_form_animation 1.5s ease-in-out';
    form[1].style.display = 'block';
    setTimeout(() => {
        form[0].style.display = 'none';
    }, 1000);
})

login_instead_btn.addEventListener('click', () => {
    form[0].style.display = 'block';
    form[0].style.animation = 'login_form_animation 1.5s ease-in-out';
    form[1].style.animation = 'login_fade_out 1.5s ease-in-out';
    setTimeout(() => {
        form[1].style.display = 'none';
    }, 1000);
})

for (let i = 0; i < cancelbtn.length; i++) {
    cancelbtn[i].addEventListener('click', () => {
        form[0].style.display = 'block';
        form[0].style.animation = 'login_form_animation 1.5s ease-in-out';
        form[1].style.animation = 'login_fade_out 1.5s ease-in-out'; 
        form[1].style.display = 'none';
        login_modal.style.display = 'none';
        document.getElementsByTagName('html')[0].style.overflow = 'scroll';
    })
}

form[0].addEventListener('submit', (e) => {
    e.preventDefault();
    // get uname and pwd from input
    let uname = document.getElementById('uname').value;
    let pwd = document.getElementById('pwd').value;
    console.log("Client side form data: " + uname + " " + pwd);

    const data = {'uname' : uname, 'pwd' : pwd};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        status: 200
    }
    fetch('/login', options)
        .then(response =>  {
            console.log('Login response back from server');
            return response.json();
        })
        .then(results => {
            const result = results;
            
            
            error_msg[0].innerHTML = result.message;
            if (result.status === true) {
                error_msg[0].style.color = 'green';
                spinner[0].style.display = 'block';
                setTimeout(() => {
                    login_modal.style.display = 'none';
                    spinner[0].style.display = 'none';
                    document.getElementsByTagName('html')[0].style.overflow = 'scroll';
                    sign_in_icon.style.display = 'none';
                    sign_out_icon.style.display = 'block'; 
                }, 3000);
            } else error_msg[0].style.color = 'red'
        })
        .catch(err => {
            console.log("Login response: " + err);
        })

});

form[1].addEventListener('submit', (e) => {
    e.preventDefault();
    // get uname and pwd from input
    let uname = document.getElementById('signup-uname').value;
    let pwd = document.getElementById('signup-pwd').value;
    let confirm_pwd = document.getElementById('confirm-pwd').value;
    console.log("Client side form data: " + uname + " " + pwd + " " + confirm_pwd);

    if (pwd === confirm_pwd) {

        const data = {'uname' : uname, 'pwd' : pwd};
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            status: 200
        }
        fetch('/signup', options)
            .then(response =>  {
                console.log('Signup response back from server');
                return response.json();
            })
            .then(results => {
                const result = results;
                
                error_msg[1].innerHTML = result.message;
                if (result.status === true) {
                    error_msg[1].style.color = 'green';
                    spinner[1].style.display = 'block';
                    setTimeout(() => {
                        login_modal.style.display = 'none';
                        spinner[1].style.display = 'none';
                        document.getElementsByTagName('html')[0].style.overflow = 'scroll';
                        sign_in_icon.style.display = 'none';
                        sign_out_icon.style.display = 'block'; 
                    }, 3000);
                } else error_msg[1].style.color = 'red'
            })
            .catch(err => {
                console.log("Login response: " + err);
            })
    } else {
        error_msg[1].style.color = 'red';
        error_msg[1].innerHTML = "Passwords do not match";
    }

});
