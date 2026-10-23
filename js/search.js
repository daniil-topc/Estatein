const searchQueryElement = document.querySelector('[data-js-property-search-query]')
const searchButtonElement = document.querySelector('[data-js-property-search-button]')
const searchResultsElement = document.querySelector('[data-js-search-results]')
const searchStatusElement = document.querySelector('[data-js-search-status]')
const propertyCardTemplateElement = document.querySelector('[data-js-property-card-template]')

// Вместо названий храним объекты с данными для карточек.
const properties = [
    {
        name: 'Seaside Serenity Villa',
        imageName: 'seaside-serenity-villa',
        imageAlt: 'Modern white villa with a swimming pool and palm trees',
        description: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.',
        price: 550000
    },
    {
        name: 'Metropolitan Haven',
        imageName: 'metropolitan-haven',
        imageAlt: 'Light blue residential towers overlooking the waterfront',
        description: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views.',
        price: 550000
    },
    {
        name: 'Rustic Retreat Cottage',
        imageName: 'rustic-retreat-cottage',
        imageAlt: 'Glass skyscrapers lit in purple at dusk',
        description: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.',
        price: 550000
    }
]

function renderProperties(propertyList) {
    // Убираем предыдущие карточки перед каждым новым выводом.
    searchResultsElement.replaceChildren()

    if (propertyList.length === 0) {
        searchStatusElement.textContent = 'Ничего не найдено :('
        return
    }

    searchStatusElement.textContent = `Найдено объектов: ${propertyList.length}`

    propertyList.forEach((property) => {
        // Копируем шаблон из HTML и заполняем его данными одного объекта.
        const cardFragment = propertyCardTemplateElement.content.cloneNode(true)
        const cardElement = cardFragment.querySelector('[data-js-property-card]')
        const imageElement = cardFragment.querySelector('[data-js-property-image]')
        const titleElement = cardFragment.querySelector('[data-js-property-title]')
        const descriptionElement = cardFragment.querySelector('[data-js-property-description]')
        const priceElement = cardFragment.querySelector('[data-js-property-price]')
        const imagePath = `./images/properties/${property.imageName}`

        imageElement.src = `${imagePath}-864.webp`
        imageElement.srcset = `${imagePath}-480.webp 480w, ${imagePath}-864.webp 864w, ${imagePath}-1296.webp 1296w`
        imageElement.alt = property.imageAlt
        titleElement.textContent = property.name
        titleElement.id = `search-${property.imageName}-title`
        cardElement.setAttribute('aria-labelledby', titleElement.id)
        descriptionElement.textContent = property.description
        priceElement.textContent = `$${property.price.toLocaleString('en-US')}`

        searchResultsElement.append(cardFragment)
    })
}

searchButtonElement.addEventListener('click', () => {
    const searchValue = searchQueryElement.value.trim().toLowerCase()

    const foundProperties = properties.filter((property) => {
        return property.name.toLowerCase().includes(searchValue)
    })

    renderProperties(foundProperties)
})

searchQueryElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        searchButtonElement.click()
    }
})

// При открытии страницы показываем все три объекта.
renderProperties(properties)
