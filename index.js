const errorIcons = document.getElementsByTagName('svg');
const submitButton = document.getElementById('submitButton');
const firstNameVal = document.querySelector('[data-namefield]')
const lastNameVal = document.querySelector('[data-lastNamefield]')
const emailVal = document.querySelector('[data-emailfield]')
const pwVal = document.querySelector('[data-pwfield]')


const nameCheck = input => {
    const nameRegex = /[0-9]/g;
    const errorIcon = input.parentElement.querySelector('svg')
    const errorLabel = input.parentElement.querySelector('div')
    console.log(`Starting value: "${input.value}"`)
    if (input.value == '') {
        input.classList.remove('success-border')
        errorIcon.classList.remove('success')
        errorLabel.classList.remove('success')
        input.classList.add('error-border')
        errorIcon.classList.add('error')
        errorLabel.classList.add('error')
        errorLabel.innerText = 'Name cannot be empty!'
        return;
    }
    if (input.value.search(nameRegex) === -1) {
        input.classList.remove('error-border')
        errorIcon.classList.remove('error')
        errorLabel.classList.remove('error')
        input.classList.add('success-border')
        errorIcon.classList.add('success')
        errorLabel.classList.add('success')
    } else {
        input.classList.remove('success-border')
        errorIcon.classList.remove('success')
        input.classList.add('error-border')
        errorIcon.classList.add('error')
        errorLabel.classList.remove('success')
        errorLabel.classList.add('error')
        errorLabel.innerText = 'Name cannot contain a number!'
    }
}

const emailCheck = input => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorIcon = input.parentElement.querySelector('svg')
    const errorLabel = input.parentElement.querySelector('div')
    if (input.value == '') {
        input.classList.remove('success-border')
        errorIcon.classList.remove('success')
        input.classList.add('error-border')
        errorIcon.classList.add('error')
        errorLabel.classList.remove('success')
        errorLabel.classList.add('error')
        errorLabel.innerText = 'Email cannot be empty!'
        return;
    }
    if (emailRegex.test(String(input.value).toLowerCase())) {
        input.classList.remove('error-border')
        errorIcon.classList.remove('error')
        errorLabel.classList.remove('error')
        input.classList.add('success-border')
        errorIcon.classList.add('success')
        errorLabel.classList.add('success')
    } else {
        input.classList.remove('success-border')
        errorIcon.classList.remove('success')
        input.classList.add('error-border')
        errorIcon.classList.add('error')
        errorLabel.classList.remove('success')
        errorLabel.classList.add('error')
        input.value = 'email@example.com'
        errorLabel.innerText = 'Looks like this is not an email!'
    }
}

const pwCheck = input => {
    const errorIcon = input.parentElement.querySelector('svg')
    const errorLabel = input.parentElement.querySelector('div')
    if (input.value == '') {
        input.classList.remove('success-border')
        errorIcon.classList.remove('success')
        input.classList.add('error-border')
        errorIcon.classList.add('error')
        errorLabel.classList.remove('success')
        errorLabel.classList.add('error')
        errorLabel.innerText = 'Password cannot be empty!'
        return;
    }
    if (input.value.length < 8) {
        input.classList.remove('success-border')
        errorIcon.classList.remove('success')
        input.classList.add('error-border')
        errorIcon.classList.add('error')
        errorLabel.classList.remove('success')
        errorLabel.classList.add('error')
        errorLabel.innerText = 'Password must be at least 8 characters!'
    } else {
        input.classList.remove('error-border')
        errorIcon.classList.remove('error')
        errorLabel.classList.remove('error')
        input.classList.add('success-border')
        errorIcon.classList.add('success')
        errorLabel.classList.add('success')
    }
}

submitButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    nameCheck(firstNameVal);
    nameCheck(lastNameVal);
    emailCheck(emailVal);
    pwCheck(pwVal);
})
