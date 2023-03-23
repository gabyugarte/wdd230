  // Retrieve the number of drinks submitted from local storage
  const numDrinks = localStorage.getItem('numDrinksSubmitted') || 0;

  // Display the number of drinks submitted in the information card
  const countElem = document.getElementById('count');
  countElem.innerText = numDrinks;
