const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//functions
function showError(input, message){
    let formControl = input.parentElement;
    formControl.className = 'form-control error';
    let small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    let formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Get Fieldname
function getFieldName(input){
    return input.charAt(0).toUpperCase() + input.slice(1);
}

//check required
function checkRequired(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim()=== ''){
            showError(input, `${getFieldName(input.id)} is required`)
        }
        else{
            showSuccess(input)
        }
    });
}

//event listeners
form.addEventListener('submit', function submitForm(e){
    e.preventDefault();
    checkRequired([username, email, password, password2])
})