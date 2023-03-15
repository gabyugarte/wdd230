//DIRECTORY PAGE................................................................

const businessList = document.querySelector('.business-list');
const cardsViewButton = document.querySelector('.cards-view');
const listViewButton = document.querySelector('.list-view');

// Fetch data from the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Display data in cards view by default
    displayCardsView(data);
    // console.log(data);
    
    // Switch between cards and list view on button click
    cardsViewButton.addEventListener('click', () => {
      displayCardsView(data);

    });
    
    listViewButton.addEventListener('click', () => {
      displayListView(data);
    });
  });
// Display businesses in cards view
function displayCardsView(data) {
  businessList.innerHTML = '';
  // console.log(data);
  data.forEach(business => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${business.image}" alt="${business.name}">
      <h2>${business.name}</h2>
      <p>${business.address}</p>
      <p>${business.phone}</p>
      <a href="${business.website}">Visit Website</a>
    `;
    businessList.appendChild(card);
  });
  businessList.classList.remove('list-view');
  businessList.classList.add('cards-view');
  console.log(data);
}


console.log(data);
// Display businesses in list view
function displayListView(data) {
  console.log(data);
  businessList.innerHTML = '';
  data.forEach(business => {
    const listItem = document.createElement('div');
    listItem.classList.add('list-item');
    listItem.innerHTML = `
      <h2>${business.name}</h2>
      <p>${business.address}</p>
      <p>${business.phone}</p>
      <a href="${business.website}">Visit Website</a>
    `;
    businessList.appendChild(listItem);
  });
  businessList.classList.remove('cards-view');
  businessList.classList.add('list-view');
}