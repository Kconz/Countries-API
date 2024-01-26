//setting variables
const contentDataCountries = document.querySelector('#content');

const getCountries = async () => {
    const url = 'https://restcountries.com/v2/all';
    const response = await fetch(url);
    // to json
    const items = await response.json();
    // filter items by name ,flag and capital 
    items.forEach(item => {
        createCard(item);
    })
}
// create div card element to display the data of countries 
const createCard = (data) => {
    const cardEl = document.createElement('div');
    cardEl.classList.add('country-card');
    const contentHTML = `
        <div class="img-container">
            <img src="${data.flag}"/>
        </div>
        <div class="info">
            <h3 class="name-countries">${data.name}</h3>
            <small>เมืองหลวง : <span>${data.capital}</span></small>
        </div>
    `
    cardEl.innerHTML = contentHTML;
    content.appendChild(cardEl)
}

getCountries()