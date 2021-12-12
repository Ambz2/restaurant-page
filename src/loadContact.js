import headchef from './images/headchef.png'


const loadContact = function() {
    const main = document.querySelector('#main');
    
    const div = document.createElement('div');
    div.classList.add('contactus');

    const title = document.createElement('h2');
    title.textContent = 'Contact Information';

    const email = document.createElement('h3');
    email.textContent = `Email: info@lasalamia.it`;

    const number = document.createElement('h3');
    number.textContent = `Phone Number: 03399957495`;

    const img = new Image()
    img.src = headchef

    const disclaimer = document.createElement('p');
    disclaimer.textContent = `For media enquiries please contact Enrique`

    
    div.appendChild(title)
    div.appendChild(email)
    div.appendChild(number)
    div.appendChild(img)
    div.appendChild(disclaimer)
    main.appendChild(div)
}


export {loadContact}