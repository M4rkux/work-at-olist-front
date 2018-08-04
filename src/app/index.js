import '../style/main.scss';

const allInputs = document.querySelectorAll('input');
const btnSubmit = document.querySelector('.btn-submit');

const pattern1 = new RegExp(".{6,}"); // At least 6 characters
const pattern2 = new RegExp("(?=.*[A-Z])"); // At least an uppercase letter
const pattern3 = new RegExp("(?=.*[0-9])"); // At least a number

const req1 = document.querySelector('.req-1');
const req2 = document.querySelector('.req-2');
const req3 = document.querySelector('.req-3');

const colsVerify = document.querySelectorAll('.col-verify');

const password = document.querySelector('#password');

allInputs.forEach(elem => {
    elem.addEventListener('keyup', function () {
        checkInput(this);
        btnSubmit.disabled = !Array.from(allInputs).every(input => checkInput(input));
    });
    elem.addEventListener('change', function () {
        checkInput(this);
        btnSubmit.disabled = !Array.from(allInputs).every(input => checkInput(input));
    });
});

function checkPassword(elem) {
    const tests = [
        pattern1.test(elem.value),
        pattern2.test(elem.value),
        pattern3.test(elem.value)
    ];
    toggleSuccessError(req1, tests[0]);
    toggleSuccessError(req2, tests[0]);
    toggleSuccessError(req3, tests[0]);

    const amount = tests.filter(test => test).length;
    colsVerify.forEach(col => {
        col.classList.remove('success', 'error', 'warning');
    });
    for (let i = 0; i < amount; i++) {
        switch (amount) {
            case 1:
                colsVerify[i].classList.add('error');
                break;
            case 2:
                colsVerify[i].classList.add('warning');
                break;
            case 3:
                colsVerify[i].classList.add('success');
                break;
        }
    }
}

function checkInput(elem) {
    let valid = elem.checkValidity();

    if (elem.name === 'password') {
        checkPassword(elem);
    }
    else if (elem.name === 'password_confirm') {
        valid = valid && elem.value === password.value;
    }
    
    toggleSuccessError(elem, valid);
    return valid;
}

function toggleSuccessError(elem, isSuccess) {
    elem.classList.toggle('success', isSuccess);
    elem.classList.toggle('error', !isSuccess);
}