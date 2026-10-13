const emailInputElement = document.querySelector('[data-js-footer-email]')
const sendButtonElement = document.querySelector('[data-js-footer-send]')

sendButtonElement.addEventListener('click', (event) => {
    event.preventDefault()

    const isValidEmail = emailInputElement.reportValidity()

    if(!isValidEmail) {
        return
    }
})