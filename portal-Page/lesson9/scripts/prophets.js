
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData(url) {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);
  displayProphets(data.prophets);
}

getProphetData(url);

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    prophets.forEach((prophet, index) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let birthDate = document.createElement('p');
      let birthPlace = document.createElement('p');
      let deathDate = document.createElement('p');
      let dl = document.createElement('dl');
      let dt1 = document.createElement('dt');
      let dd1 = document.createElement('dd');
      let dt2 = document.createElement('dt');
      let dd2 = document.createElement('dd');
    // Build the h2 content out to show the prophet's full name and number - finish the template string
    let prophetNumber = index + 1;
    let suffix = '';
    switch (prophetNumber % 10) {
      case 1:
        suffix = 'st';
        break;
      case 2:
        suffix = 'nd';
        break;
      case 3:
        suffix = 'rd';
        break;
      default:
        suffix = 'th';
        break;
    }
    h2.textContent = `${prophet.name} - ${prophetNumber}${suffix}`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} - ${prophetNumber}${suffix}`);      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
// Calculate the age of the prophet at death or current age
let age = '';
let birthdayYearNumber ='';
if (prophet.death) {
 const birthDayYear = new Date(prophet.birthdate);
 const birthdayYearNumber = birthDayYear.getFullYear();
 const deathYear = new Date(prophet.death);
 const deathYearNumber = deathYear.getFullYear();
  age = ` (${deathYearNumber - new Date(prophet.birthdate).getFullYear()} years old)`;
} else {
  let currentYear = new Date().getFullYear();
  let bornyear = new Date(prophet.birthdate).getFullYear()
  age = `(${currentYear - bornyear} years old)`;
}

// Build the birth date and death date paragraphs
birthDate.textContent = `Born ${prophet.birthdate} in ${prophet.birthplace}.`;
if (prophet.death) {
  deathDate.textContent = `Died ${prophet.death} at ${age} age.`;
} else {
  deathDate.textContent = `Current age is ${age}.`;
}
    //   Set the definition term and definition description for birth date and birth place
    //   dt1.textContent = 'Date of Birth';
    //   dd1.textContent = prophet.birthdate;
    //   dt2.textContent = 'Place of Birth';
    //   dd2.textContent = prophet.birthplace;
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(portrait);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);
      card.appendChild(deathDate);
      card.appendChild(dl);
  
      // Append the definition list to the card
      dl.appendChild(dt1);
      dl.appendChild(dd1);
      dl.appendChild(dt2);
      dl.appendChild(dd2);
  
      cards.appendChild(card);
    }) // end of forEach loop
  } // end of function expression
 