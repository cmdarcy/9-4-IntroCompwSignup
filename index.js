const errorIcons = document.getElementsByTagName('svg');
const submitButton = document.getElementById('submitButton');
const firstNameVal = document.querySelector('[data-namefield]')
const lastNameVal = document.querySelector('[data-lastNamefield]')
const emailVal = document.querySelector('[data-emailfield]')
const pwVal = document.querySelector('[data-pwfield]')
const nameRegex = /[0-9]/g;

const nameCheck = (input) => {
    console.log(`Starting value: "${input.value}"`)
    if (input.value == '') {
        console.log(`${input.value} is blank!`)
        input.style.border = '1px solid var(--Red)'
        return;
    }
    if (input.value.search(nameRegex) === -1) {
        console.log(`${input.value} doesn't have a number, is an ok name`)
    } else {
        console.log(`${input.value} contains a number`)
        input.style.border = '1px solid var(--Red)'
    }
}

const emailCheck = input => {
    console.log(`Starting value: "${input.value}"`)
    if (input.value == '') {
        console.log(`${input.value} is blank!`)
        input.style.border = '1px solid var(--Red)'
        return;
    }
    if (input.value === 'Test') {
        console.log(`Good email address!`)
    } else {
        console.log(`Bad email adress`)
        input.style.border = '1px solid var(--Red)'
        input.style.color = 'var(--Red)'
        input.value = 'email@example.com'
    }
}

submitButton.addEventListener('click', (ev) => {
    errorIcons[0].style.opacity = 1
    errorIcons[1].style.opacity = 1
    errorIcons[2].style.opacity = 1
    errorIcons[3].style.opacity = 1
    nameCheck(firstNameVal);
    nameCheck(lastNameVal);
    emailCheck(emailVal);
    pwVal.style.border = '1px solid var(--Red)'
})
