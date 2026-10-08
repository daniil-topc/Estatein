const closeButtonElement =
    document.querySelector('.header-announcement-close')
const headerAnnouncementElement =
    document.querySelector('.header-announcement')

closeButtonElement.addEventListener('click', () => {
    headerAnnouncementElement.classList.add('non-active')
})