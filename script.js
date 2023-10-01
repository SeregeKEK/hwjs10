import {arrApi} from './data.js';
const data = JSON.parse(arrApi);
console.log(data);
const cards = document.createElement('div');
document.body.appendChild(cards);
cards.style.display = 'flex'
cards.style.flexWrap = 'wrap'
cards.style.flexDirection = 'row'
cards.style.gap = '15px'
cards.style.margin = '60px auto'
data.forEach(({id, email, first_name, last_name, avatar}) => {
    const card = document.createElement('div')
    cards.appendChild(card)
    card.style.display = 'flex'
    card.style.flexWrap = 'wrap'
    card.style.flexDirection = 'column'
    card.style.border = '1px solid black'
    const cardImg = document.createElement('img')
    cardImg.src = avatar
    card.appendChild(cardImg)
    const cardText = document.createElement('div')
    card.appendChild(cardText)
    card.style.display = 'flex'
    card.style.flexDirection = 'column'
    card.style.gap = '10px'
    const cardName = document.createElement('p')
    cardName.textContent = `${first_name} ${last_name}`
    cardText.appendChild(cardName)
    const cardMail = document.createElement('p')   
    cardMail.textContent = email
    cardText.appendChild(cardMail)
    const cardIdEl = document.createElement('p')
    cardIdEl.textContent = `id: ${id}`
    card.appendChild(cardIdEl)
});

