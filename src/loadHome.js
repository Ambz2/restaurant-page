import headChef from './images/la-salamiarama.jpg';
import location from './images/location.png'

let content = document.querySelector('#content');
let main = document.createElement('div')
main.setAttribute('id', 'main')

const loadHeader = function() {
    let header = document.createElement('header')
    let title = document.createElement('h1')
    title.textContent = 'La Salamia'
    let nav = document.createElement('nav')

    let homeButton = document.createElement('button')
    homeButton.textContent = 'Home'
    homeButton.setAttribute('id','home')
    let menuButton = document.createElement('button')
    menuButton.textContent = 'Menu'
    menuButton.setAttribute('id','menu')
    let contactButton = document.createElement('button')
    contactButton.textContent = 'Contact Us'
    contactButton.setAttribute('id', 'contact')

    nav.appendChild(homeButton)
    nav.appendChild(menuButton)
    nav.appendChild(contactButton)
    header.appendChild(title)
    header.appendChild(nav)
    content.appendChild(header)

}


const loadHome = function() {
    

    createModal();
    createSection3();
    createSection4();
    createSection5();
    content.appendChild(main)
}

const createModal = function() {
    let modal = document.createElement('div')
    modal.classList.add('modal')

    const headchef = new Image();
    headchef.src = headChef
    headchef.setAttribute("id", 'headchef')

    modal.appendChild(headchef)
    main.appendChild(modal)
}

const createSection3 = function() {
    let section3 = document.createElement('div')
    section3.setAttribute('id','section3')
    let header = document.createElement('h2')
    header.textContent = 'Opening Times'
    let table = document.createElement('table')
    table.setAttribute('id','openingTimes')
    let times = [
        '5:30pm-11:30pm',
        '5:30pm-11:30pm',
        '5:30pm-11:30pm',
        '5:30pm-11:30pm',
        '6:30pm-12:30pm',
        '5:30pm-01:30pm',
        '4:30pm-10:30pm'
    ]
    createOpeningTimes(table, times)

    section3.appendChild(header)
    section3.appendChild(table)
    main.appendChild(section3)
}


const createOpeningTimes = function(table, times) {
    const dayArray  = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 
        'Saturday', 'Sunday']
    for (let i=0; i < dayArray.length; i++) {
        let row = document.createElement('tr');
        let day = document.createElement('td');
        let time = document.createElement('td');

        day.textContent = dayArray[i];
        time.textContent = times[i];

        row.appendChild(day);
        row.appendChild(time);
        table.appendChild(row)
    }
}

const createSection4 = function() {
    let section4 = document.createElement('div');
    section4.setAttribute('id', 'section4');

    let title = document.createElement('h2');
    title.textContent = 'Reviews:';
    
    let review = document.createElement('div')
    review.classList.add('review');
    review.textContent = `This is absolutely the best restaurant I have ever been to. 
    At first thought, I thought salami couldn't exclusively bring
    me the same joy as a bowl of sushi could, but 1 mouthful of each of the courses
    just brought me extreme joy and satisfaction. The head chef really does know what he's
    doing!- Remi`

    section4.appendChild(title)
    section4.appendChild(review)
    main.appendChild(section4)
}

const createSection5 = function() {
    let section5 = document.createElement('div')
    section5.setAttribute("id", 'section5');

    let title = document.createElement('h2');
    title.textContent = `Location: `;

    const location = document.createElement('iframe');
    location.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.56957877626!2d12.053015161657296!3d45.05395565228585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477e8c152f87d73d%3A0x5d8deae04a5ee1eb!2s45011%20Adria%2C%20Province%20of%20Rovigo%2C%20Italy!5e0!3m2!1sen!2suk!4v1639327023026!5m2!1sen!2suk"
    location.style.width = 600
    location.style.height = 450
    location.style.border = '0'
    

    section5.appendChild(title)
    section5.appendChild(location)
    main.appendChild(section5)
}

export {loadHeader, loadHome}