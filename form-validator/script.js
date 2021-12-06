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
//Check Email
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(input.value.trim() === ''){
        showError(input, `${getFieldName(input.id)} is required`)
   }
    else if(re.test(input.value)){
        showSuccess(input)
    }else{
        showError(input, 'Email is not valid')
    }
}

//Check passwords match
function checkPasswordsMatch(input1, input2){
    if(input1.value === ''){
        showError(input1, `${getFieldName(input1.id)} is required`)
    }
    else if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match')
    }else{
        showSuccess(input2)
    }
}

//Check Length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input.id)} must be atleast ${min} characters`);
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input.id)} must not be more than ${max} characters`);
    } else{
        showSuccess(input)
    }
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
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 10);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
})