import './style.css';
import {loadHeader, loadHome} from './loadHome'

loadHeader()
loadHome()

let homeButton = document.querySelector('#home')
let menuButton = document.querySelector('#menu')
let contactButton = document.querySelector('#contact')

const clearDOM = function() {
    let main = document.querySelector('#main')
    while (main.firstChild) {
        main.removeChild(main.firstChild)
    }
}

homeButton.addEventListener('click', () => {
    clearDOM()
    loadHome()
})

menuButton.addEventListener('click', () => {
    clearDOM()
})