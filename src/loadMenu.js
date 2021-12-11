import lunchables from './images/lunchable.jpeg'
import rosettes from './images/rosettes.jpg'
import rollups from './images/rollups.jpeg'
import salamiPizza from './images/Salami-pizza.jpeg'
import salamiSandwich from './images/sandwich.jpeg'
import salamiSushi from './images/sushi.jpeg'
import chocolateSalami from './images/ChocolateSalami_01.jpg'
import lasagna from './images/lasagna.jpg'
import hennesey from './images/Hennesy.jpeg'
import priorat from './images/Priorat.jpg'

const appetisers = [
    {
        name: 'Salami A La Lunchable',
        image: lunchables
    },
    {
        name: 'Salami Rosettes',
        image: rosettes
    },
    {
        name: 'Salami Rollups',
        image: rollups
    }
]

const mains = [
    {
        name:'Salami Sushi',
        image: salamiSushi
    },
    {
        name:'Salami Pizza',
        image: salamiPizza
    },
    {
        name:'Salami Sandwich',
        image: salamiSandwich
    }
]

const desserts = [
    {
        name:'Beef and Salami Lasagna Cake',
        image: lasagna
    },
    {
        name:'Chocolate Salami',
        image: chocolateSalami
    },
]

const drinks = [
    {
        name:'Hennesy',
        image: hennesey
    },
    {
        name:'Priorat Wine',
        image: priorat
    },
]


const loadMenu = function() {
    createAppetisers();
    createMains();
    createDesserts();
    createDrinks();
}

const createAppetisers = function() {
    const container = document.createElement('div')
    container.classList.add('container')

    const title = document.createElement('h2')
    title.textContent = 'Appetisers'

    container.appendChild(title)
    for (let i=0; i < appetisers.length; i++) {
        generateMenuItem(appetisers[i].name, appetisers[i].image, container)
    }

    let main = document.querySelector('#main')

    main.appendChild(container)
}

const createMains = function() {
    const container = document.createElement('div')
    container.classList.add('container')

    const title = document.createElement('h2')
    title.textContent = 'Mains'

    container.appendChild(title)
    for (let i=0; i < mains.length; i++) {
        generateMenuItem(mains[i].name, mains[i].image, container)
    }

    let main = document.querySelector('#main')

    main.appendChild(container)
}

const createDesserts = function() {
    const container = document.createElement('div')
    container.classList.add('container')

    const title = document.createElement('h2')
    title.textContent = 'Desserts'

    container.appendChild(title)
    for (let i=0; i < desserts.length; i++) {
        generateMenuItem(desserts[i].name, desserts[i].image, container)
    }

    let main = document.querySelector('#main')

    main.appendChild(container)
}

const createDrinks = function() {
    const container = document.createElement('div')
    container.classList.add('container')

    const title = document.createElement('h2')
    title.textContent = 'Drinks'

    container.appendChild(title)
    for (let i=0; i < drinks.length; i++) {
        generateMenuItem(drinks[i].name, drinks[i].image, container)
    }

    let main = document.querySelector('#main')

    main.appendChild(container)
}

const generateMenuItem = function(name, image, container) {
    const menuItem = document.createElement('div')
    menuItem.classList.add('menuItem')

    const title = document.createElement('h3');
    title.textContent = name
    title.classList.add('itemTitle')

    const displayPicture = new Image()
    displayPicture.src = image
    displayPicture.classList.add('displayPicture')

    menuItem.appendChild(title)
    menuItem.appendChild(displayPicture)

    container.appendChild(menuItem)

}

export {loadMenu}