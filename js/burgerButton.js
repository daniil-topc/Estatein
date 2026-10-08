const burgerButtonElement = document.querySelector('[data-js-menu-toggle]')
const dropDownMenuElement = document.querySelector('[data-js-dropdown-menu]')
const menuLinkElements = document.querySelectorAll('a')

burgerButtonElement.addEventListener('click', () => {
    dropDownMenuElement.classList.toggle('is-active')
})

menuLinkElements.forEach((link) => {
    link.addEventListener('click', () => {
        dropDownMenuElement.classList.remove('is-active')
    })
})


document.addEventListener('click', (event) => {
    const isClickInsideMenu = event.target.closest('[data-js-dropdown-menu]')
    const isClickOnButtonMenu = event.target.closest('[data-js-menu-toggle]')

    if(!isClickOnButtonMenu && !isClickInsideMenu) {
        dropDownMenuElement.classList.remove('is-active')
    }
})