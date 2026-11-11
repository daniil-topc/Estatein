// номер фото, которое сейчас показано слева: 0 — первое, 8 — последнее
let currentIndex = 0

const galleryThumbElements = document.querySelectorAll('[data-js-gallery-thumb]')
const galleryPrevButtonElement = document.querySelector('[data-js-gallery-prev]')
const galleryNextButtonElement = document.querySelector('[data-js-gallery-next]')
const gallerySlideElements = document.querySelectorAll('.property-gallery-slide')
const galleryDotElements = document.querySelectorAll('[data-js-gallery-dot]')

// обновляем всю галерею под текущий номер фото
function updateGallery() {
    // слева показываем текущее фото
    gallerySlideElements[0].src = galleryThumbElements[currentIndex].dataset.gallerySrc

    // номер фото для правого слота: следующее после текущего, после последнего снова первое
    let nextIndex = currentIndex + 1

    if(nextIndex === galleryThumbElements.length) {
        nextIndex = 0
    }

    // справа показываем следующее фото
    gallerySlideElements[1].src = galleryThumbElements[nextIndex].dataset.gallerySrc

    // гасим все миниатюры
    galleryThumbElements.forEach((galleryThumb) => {
        galleryThumb.setAttribute('aria-pressed', 'false')
    })

    // подсвечиваем миниатюру текущего фото
    galleryThumbElements[currentIndex].setAttribute('aria-pressed', 'true')

    // гасим все полоски-точки
    galleryDotElements.forEach((galleryDot) => {
        galleryDot.classList.remove('is-active')
    })

    // подсвечиваем полоску текущего фото
    galleryDotElements[currentIndex].classList.add('is-active')

    // на первом фото блокируем стрелку «назад»
    galleryPrevButtonElement.disabled = currentIndex === 0

    // на последнем фото блокируем стрелку «вперёд»
    galleryNextButtonElement.disabled = currentIndex === galleryThumbElements.length - 1

    // прокручиваем полосу миниатюр, чтобы активная была видна (нужно на телефоне)
    galleryThumbElements[currentIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest',
    })
}

// клик по миниатюре: показываем фото с её номером
galleryThumbElements.forEach((thumb, index) => {

    thumb.addEventListener('click', () => {
        currentIndex = index
        updateGallery()
    })
})

// стрелка «вперёд»: следующее фото
galleryNextButtonElement.addEventListener('click', () => {
    currentIndex = currentIndex + 1
    updateGallery()
})

// стрелка «назад»: предыдущее фото
galleryPrevButtonElement.addEventListener('click', () => {
    currentIndex = currentIndex - 1
    updateGallery()
})
