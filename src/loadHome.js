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

    let headchef = document.createElement('img')
    headchef.src = '/images/la-salamiarama.jpg'
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
    doing! <br> - Remi`

    section4.appendChild(title)
    section4.appendChild(review)
    main.appendChild(section4)
}

const createSection5 = function() {
    let section5 = document.createElement('div')
    section5.setAttribute("id", 'section5');

    let title = document.createElement('h2');
    title.textContent = `Location: `;

    let img = document.createElement('img');
    img.src = '/images/location.png'

    section5.appendChild(title)
    section5.appendChild(img)
    main.appendChild(section5)
}

export {loadHeader, loadHome}