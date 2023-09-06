const errorIcons = document.getElementsByTagName('svg');
const submitButton = document.getElementById('submitButton');
const firstNameVal = document.querySelector('[data-namefield]')
const lastNameVal = document.querySelector('[data-lastNamefield]')
const emailVal = document.querySelector('[data-emailfield]')
const pwVal = document.querySelector('[data-pwfield]')


const successHandle = input => {
    const errorIcon = input.parentElement.querySelector('svg');
    const errorLabel = input.parentElement.querySelector('div');
    input.classList.remove('error-border')
    errorIcon.classList.remove('error')
    errorLabel.classList.remove('error')
    input.classList.add('success-border')
    errorIcon.classList.add('success')
    errorLabel.classList.add('success')
}

const errorHandle = (input, message) => {
    const errorIcon = input.parentElement.querySelector('svg');
    const errorLabel = input.parentElement.querySelector('div');
    input.classList.remove('success-border')
    errorIcon.classList.remove('success')
    errorLabel.classList.remove('success')
    input.classList.add('error-border')
    errorIcon.classList.add('error')
    errorLabel.classList.add('error')
    errorLabel.innerText = message
}

const nameCheck = input => {
    const nameRegex = /[0-9]/g;
    if (input.value == '') {
        errorHandle(input, 'Name cannot be empty!')
        return;
    }
    if (input.value.search(nameRegex) === -1) {
        successHandle(input)
    } else {
        errorHandle(input, 'Name cannot contain a number!')
    }
}

const emailCheck = input => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (input.value == '') {
        errorHandle(input, 'Email cannot be empty!')
        return;
    }
    if (emailRegex.test(String(input.value).toLowerCase())) {
        successHandle(input)
    } else {
        errorHandle(input, 'Looks like this is not an email!')
        input.value = 'email@example.com'
        errorLabel.innerText = 'Looks like this is not an email!'
    }
}

const pwCheck = input => {
    if (input.value == '') {
        errorHandle(input, 'Password cannot be empty!')
        return;
    }
    if (input.value.length < 8) {
        errorHandle(input, 'Password must be at least 8 characters!')
    } else {
        successHandle(input);
    }
}

submitButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    nameCheck(firstNameVal);
    nameCheck(lastNameVal);
    emailCheck(emailVal);
    pwCheck(pwVal);
})
