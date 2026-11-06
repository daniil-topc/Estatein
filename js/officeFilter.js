const officeFilterButtonElements = document.querySelectorAll('[data-js-office-filter]')
const officeCardElements = document.querySelectorAll('[data-office-type]')

officeFilterButtonElements.forEach((button) => {
    button.addEventListener('click', () => {
        const filter = button.dataset.jsOfficeFilter

        officeFilterButtonElements.forEach((filterButton) => {
            filterButton.setAttribute('aria-pressed', 'false')
        })

        button.setAttribute('aria-pressed', 'true')

        officeCardElements.forEach((card) => {
            const cardType = card.dataset.officeType

            const isVisible = filter === 'all' || cardType === filter
            card.hidden = !isVisible
        })
    })
})