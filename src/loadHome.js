let content = document.querySelector('#content');

const loadHeader = function() {
    let header = document.createElement('header')
    let title = document.createElement('h1')
    title.textContent = 'La Salamia'
    let nav = document.createElement('nav')

    let homeButton = document.createElement('button')
    homeButton.textContent = 'Home'
    let menuButton = document.createElement('button')
    menuButton.textContent = 'Menu'
    let contactButton = document.createElement('button')
    contactButton.textContent = 'Contact Us'

    nav.appendChild(homeButton)
    nav.appendChild(menuButton)
    nav.appendChild(contactButton)
    header.appendChild(title)
    header.appendChild(nav)
    content.appendChild(header)

}


const loadHome = function() {
    createModal()
}

const createModal = function() {
    let modal = document.createElement('div')
    modal.classList.add('modal')

    let headchef = document.createElement('img')
    headchef.src = '/images/la-salamiarama.jpg'
    headchef.setAttribute("id", 'headchef')

    modal.appendChild(headchef)
    content.appendChild(modal)

}


export {loadHeader, loadHome}