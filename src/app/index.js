import '../style/main.scss';
import { AccountService } from './account.service';
import confirmation from '../public/confirmation.html'

const allInputs = Array.from(document.querySelectorAll('input'));
const btnSubmit = document.querySelector('.btn-submit');

const pattern1 = new RegExp(".{6,}"); // At least 6 characters
const pattern2 = new RegExp("(?=.*[A-Z])"); // At least an uppercase letter
const pattern3 = new RegExp("(?=.*[0-9])"); // At least a number

const req1 = document.querySelector('.req-1');
const req2 = document.querySelector('.req-2');
const req3 = document.querySelector('.req-3');

const passwordStrength = document.querySelectorAll('.password-strength');

const password = document.querySelector('#password');

const form = document.querySelector('form');

allInputs.forEach(elem => {
    elem.addEventListener('keyup', function () {
        checkInput(this, true);
        btnSubmit.disabled = !allInputs.every(input => checkInput(input));
    });
    elem.addEventListener('change', function () {
        checkInput(this, true);
        btnSubmit.disabled = !allInputs.every(input => checkInput(input));
    });
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    btnSubmit.disabled = true;
    btnSubmit.classList.add('loading');

    let account = {};
    allInputs.forEach(elem => {
        elem.disabled = true;
        if (elem.name !== 'password_confirm') {
            account[elem.name] = elem.value;
        }
    });

    AccountService.create(account).then(result => { 
        if(result.ok) {
            const div = document.createElement('div');
            div.innerHTML = confirmation;
            form.parentNode.appendChild(div);
            form.parentNode.removeChild(form);
        } else {
            btnSubmit.disabled = false;
            btnSubmit.classList.remove('loading');
            allInputs.map(elem => elem.disabled = false);
        }
    });
});

function checkPassword(elem) {
    const tests = [
        pattern1.test(elem.value),
        pattern2.test(elem.value),
        pattern3.test(elem.value)
    ];
    toggleSuccessError(req1, tests[0]);
    toggleSuccessError(req2, tests[1]);
    toggleSuccessError(req3, tests[2]);

    const amount = tests.filter(test => test).length;
    passwordStrength.forEach(col => {
        col.classList.remove('success', 'error', 'warning');
    });
    for (let i = 0; i < amount; i++) {
        switch (amount) {
            case 1:
                passwordStrength[i].classList.add('error');
                break;
            case 2:
                passwordStrength[i].classList.add('warning');
                break;
            case 3:
                passwordStrength[i].classList.add('success');
                break;
        }
    }
}

function checkInput(elem, changeClass = false) {
    let valid = elem.checkValidity();

    if (elem.name === 'password') {
        checkPassword(elem);
    }
    else if (elem.name === 'password_confirm') {
        valid = valid && elem.value === password.value;
    }
    
    if (changeClass) {
        toggleSuccessError(elem, valid);
    }
    return valid;
}

function toggleSuccessError(elem, isSuccess) {
    elem.classList.toggle('success', isSuccess);
    elem.classList.toggle('error', !isSuccess);
}