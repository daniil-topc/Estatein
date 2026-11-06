const officeFilterButtonElements = document.querySelectorAll('[data-js-office-filter]')
const officeCardElements = document.querySelectorAll('[data-office-type]')

officeFilterButtonElements.forEach((button) => {
    button.addEventListener('click', () => {
        // читаем фильтр нажатой вкладки: 'all' или 'regional'
        const filter = button.dataset.jsOfficeFilter

        // гасим все вкладки, All и Regional
        officeFilterButtonElements.forEach((filterButton) => {
            filterButton.setAttribute('aria-pressed', 'false')
        })

        // зажигаем нажатую вкладку
        button.setAttribute('aria-pressed', 'true')

        // проходим по карточкам и для каждой решаем, показывать её или нет
        officeCardElements.forEach((card) => {
            // читаем тип карточки
            const cardType = card.dataset.officeType
            // решаем, показывать карточку или нет
            const isVisible = filter === 'all' || cardType === filter
            // прячем или показываем
            card.hidden = !isVisible
        })
    })
})