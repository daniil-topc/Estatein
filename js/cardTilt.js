const tiltWrapperElements = document.querySelectorAll('[data-js-tilt]')
const tiltReducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
const tiltHoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
const tiltMaxAngle = 8

tiltWrapperElements.forEach((wrapperElement) => {
    const cardElement = wrapperElement.querySelector('[data-js-tilt-card]')

    if (!cardElement) return

    let animationFrameId = 0
    let pointerX = 0
    let pointerY = 0

    const resetTilt = () => {
        cancelAnimationFrame(animationFrameId)
        animationFrameId = 0

        wrapperElement.classList.remove('is-hover')
        cardElement.classList.remove('is-tilting')

        wrapperElement.style.setProperty('--tilt-rx', '0deg')
        wrapperElement.style.setProperty('--tilt-ry', '0deg')
        wrapperElement.style.setProperty('--tilt-gx', '50%')
        wrapperElement.style.setProperty('--tilt-gy', '50%')
    }

    const updateTilt = () => {
        animationFrameId = 0

        const bounds = wrapperElement.getBoundingClientRect()

        if (!bounds.width || !bounds.height) {
            resetTilt()
            return
        }

        const x = Math.min(1, Math.max(0, (pointerX - bounds.left) / bounds.width))
        const y = Math.min(1, Math.max(0, (pointerY - bounds.top) / bounds.height))

        const rotateX = (0.5 - y) * tiltMaxAngle * 2
        const rotateY = (x - 0.5) * tiltMaxAngle * 2

        wrapperElement.style.setProperty('--tilt-rx', `${rotateX.toFixed(2)}deg`)
        wrapperElement.style.setProperty('--tilt-ry', `${rotateY.toFixed(2)}deg`)
        wrapperElement.style.setProperty('--tilt-gx', `${(x * 100).toFixed(2)}%`)
        wrapperElement.style.setProperty('--tilt-gy', `${(y * 100).toFixed(2)}%`)
    }

    const handlePointerMove = (event) => {
        if (event.pointerType === 'touch' || tiltReducedMotionQuery.matches || !tiltHoverQuery.matches) {
            resetTilt()
            return
        }

        pointerX = event.clientX
        pointerY = event.clientY

        wrapperElement.classList.add('is-hover')
        cardElement.classList.add('is-tilting')

        if (!animationFrameId) {
            animationFrameId = requestAnimationFrame(updateTilt)
        }
    }

    wrapperElement.addEventListener('pointerenter', handlePointerMove)
    wrapperElement.addEventListener('pointermove', handlePointerMove)
    wrapperElement.addEventListener('pointerleave', resetTilt)
    wrapperElement.addEventListener('pointercancel', resetTilt)

    window.addEventListener('blur', resetTilt)
    tiltReducedMotionQuery.addEventListener('change', resetTilt)
    tiltHoverQuery.addEventListener('change', resetTilt)

    resetTilt()
})
