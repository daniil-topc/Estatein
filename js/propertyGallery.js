let currentIndex = 0

const galleryThumbElements = document.querySelectorAll('[data-js-gallery-thumb]')
const galleryPrevButtonElement = document.querySelector('[data-js-gallery-prev]')
const galleryNextButtonElement = document.querySelector('[data-js-gallery-next]')
const gallerySlideElements = document.querySelectorAll('.property-gallery-slide')
const galleryDotElements = document.querySelectorAll('[data-js-gallery-dot]')


galleryThumbElements.forEach((thumb, index) => {

    thumb.addEventListener('click', () => {
        currentIndex = index

        gallerySlideElements[0].src = thumb.dataset.gallerySrc

        let nextIndex = currentIndex + 1

        if(nextIndex === galleryThumbElements.length) {
            nextIndex = 0
        }

        gallerySlideElements[1].src = galleryThumbElements[nextIndex].dataset.gallerySrc

        galleryThumbElements.forEach((galleryThumb) => {
            galleryThumb.setAttribute('aria-pressed', 'false')
        })

        thumb.setAttribute('aria-pressed', 'true')

        galleryDotElements.forEach((galleryDot) => {
            galleryDot.classList.remove('is-active')
        })

        galleryDotElements[currentIndex].classList.add('is-active')
    })
})