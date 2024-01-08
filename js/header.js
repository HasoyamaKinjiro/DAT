function header() {
    const about = document.querySelector('.about')
    const aboutUl = document.querySelector('.about__ul')
    const aboutArrowUp = document.getElementById('about-arrow__up')
    const aboutArrowDown = document.getElementById('about-arrow__down')
    
    const phoneBack = document.querySelector('.phone-back')
    const phoneIcon = document.getElementById('phone-icon')
    const phoneLi = document.querySelector('.phone-li')
    const phoneArrowDown = document.getElementById('phone-arrow__down')
    const phoneArrowUp = document.getElementById('phone-arrow__up')
    const phoneUlHide = document.querySelector('.phone-ul__hide')


    /*About Logic*/

    function aboutOnClick() {
        if (aboutUl.style.visibility === 'visible') {
            aboutUl.style.visibility = 'hidden'
            aboutUl.style.opacity = '0'

            about.style.background = 'none'

            aboutArrowDown.style.display = 'block'
            aboutArrowUp.style.display = 'none'
        } else {
            aboutUl.style.visibility = 'visible'
            aboutUl.style.opacity = '1'

            about.style.background = 'rgba(255, 255, 255, 0.10)'

            aboutArrowDown.style.display = 'none'
            aboutArrowUp.style.display = 'block'
        }

    }

    function aboutOnHover(isHovered) {
        if (isHovered || aboutUl.style.visibility === 'visible') {
            about.style.background = 'rgba(255, 255, 255, 0.10)'
        } else {
            about.style.background = 'none'
        }
    }

    /*Phone Logic*/

    function phoneOnClick() {
        if (phoneBack.style.display === 'block') {
            phoneBack.style.display = 'none'

            phoneUlHide.style.display = 'none'

            phoneArrowUp.style.display = 'none'
            phoneArrowDown.style.display = 'inline'
        } else {
            phoneBack.style.display = 'block'

            phoneUlHide.style.display = 'flex'

            phoneArrowUp.style.display = 'inline'
            phoneArrowDown.style.display = 'none'
        }
    }

    about.onmouseover = () => aboutOnHover(true)
    about.onmouseout = () => aboutOnHover(false)
    about.addEventListener('click', aboutOnClick)

    phoneIcon.addEventListener('click', phoneOnClick)
    phoneLi.addEventListener('click', phoneOnClick)
}